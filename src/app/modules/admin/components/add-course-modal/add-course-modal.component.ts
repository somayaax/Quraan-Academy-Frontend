import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CourseService } from "../../services/course.service";
import { MatDialog } from "@angular/material/dialog";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: "app-add-course-modal",
    templateUrl: "./add-course-modal.component.html",
    styleUrls: ["./add-course-modal.component.css"],
})
export class AddCourseModalComponent implements OnInit {
    courseForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private course: CourseService,
        private dialog: MatDialog,
        private toastr: ToastrService
    ) {
        this.courseForm = this.fb.group({
            name: ["", [Validators.required, this.trimValidator]],
            level: ["", [Validators.required, this.levelValidator]],
            description: [
                "",
                [
                    Validators.required,
                    this.trimValidator,
                    Validators.minLength(10),
                ],
            ],
            numberOfSessions: ["", [Validators.required]],
            price: [
                "",
                [
                    Validators.required,
                    this.trimValidator,
                    this.greaterThanZeroValidator,
                ],
            ],
            startDate: ["", [Validators.required]],
            endDate: ["", [Validators.required]],
            startTime: ["", [Validators.required, this.trimValidator]],
            endTime: ["", [Validators.required, this.trimValidator]],
            teacher: ["", [Validators.required, this.trimValidator]],
            daysOfWeek: [[], [Validators.required, this.daysOfWeekValidator]],
        });

        this.courseForm
            .get("startDate")
            ?.valueChanges.subscribe(() => this.calculateSessions());
        this.courseForm
            .get("endDate")
            ?.valueChanges.subscribe(() => this.calculateSessions());
        this.courseForm
            .get("daysOfWeek")
            ?.valueChanges.subscribe(() => this.calculateSessions());
    }

    trimValidator(control: any) {
        const value = control.value as string;
        const isWhitespace = value.trim().length === 0;
        return isWhitespace ? { whitespace: true } : null;
    }
    levelValidator(control: any) {
        const validLevels = ["beginner", "intermediate", "advanced"];
        return validLevels.includes(control.value)
            ? null
            : { invalidLevel: true };
    }
    daysOfWeekValidator(control: any) {
        const validDaysOfWeek = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ];
        const daysOfWeek = control.value;

        if (!daysOfWeek) {
            return { required: true };
        }

        for (const dayOfWeek of daysOfWeek) {
            if (!validDaysOfWeek.includes(dayOfWeek)) {
                return { invalidDayOfWeek: true };
            }
        }

        return null;
    }
    greaterThanZeroValidator(control: any) {
        return control.value > 0 ? null : { notGreaterThanZero: true };
    }
    calculateNumberOfSessions(
        startDate: Date,
        endDate: Date,
        daysOfWeek: string[]
    ): number {
        let numSessions = 0;
        const dayOfWeekMs = 24 * 60 * 60 * 1000;
        if (startDate) {
            let currDate = new Date(startDate.getTime());
            while (currDate <= endDate) {
                if (
                    daysOfWeek.includes(
                        currDate.toLocaleDateString("en-US", {
                            weekday: "long",
                        })
                    )
                ) {
                    numSessions++;
                }
                currDate = new Date(currDate?.getTime() + dayOfWeekMs);
            }
        }
        return numSessions;
    }

    calculateSessions() {
        const startDate = this.courseForm.get("startDate")?.value as Date;
        const endDate = this.courseForm.get("endDate")?.value as Date;
        const daysOfWeek = this.courseForm.get("daysOfWeek")?.value as string[];

        const numSessions = this.calculateNumberOfSessions(
            startDate,
            endDate,
            daysOfWeek
        );

        this.courseForm.patchValue({ numberOfSessions: numSessions });
    }

    onSubmit() {
        this.calculateSessions();
        this.course.addNewCourse(this.courseForm.value).subscribe({
            next: () => {
                this.course.buttonClicked.emit();
                this.dialog.closeAll();
            },
            error: (error: any) => {
                let {
                    error: { message },
                } = error;
                if (!message) message = error.error.error;
                console.log(message);
                this.toastr.error(`${message}`, "Error");
            },
        });
    }
    ngOnInit(): void {}
}
