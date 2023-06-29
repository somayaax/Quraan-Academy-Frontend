import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { RecordedCourseCategoryService } from "../../services/recorded-course-category.service";
import { MatDialog } from "@angular/material/dialog";

@Component({
    selector: "app-add-recorded-course-category-modal",
    templateUrl: "./add-recorded-course-category-modal.component.html",
    styleUrls: ["./add-recorded-course-category-modal.component.css"],
})
export class AddRecordedCourseCategoryModalComponent implements OnInit {
    categoryForm: FormGroup;
    constructor(
        private fb: FormBuilder,
        private toastr: ToastrService,
        private category: RecordedCourseCategoryService,
        private dialog: MatDialog
    ) {
        this.categoryForm = this.fb.group({
            name: ["", [Validators.required, , this.trimValidator]],
        });
    }
    trimValidator(control: any) {
        const value = control.value as string;
        const isWhitespace = value.trim().length === 0;
        return isWhitespace ? { whitespace: true } : null;
    }
    onSubmit(): void {
        this.category
            .addRecordedCourseCategory(this.categoryForm.value)
            .subscribe({
                next: () => {
                    this.category.buttonClicked.emit();
                    this.dialog.closeAll();
                },
                error: (error: any) => {
                    let {
                        error: { message },
                    } = error;
                    if (!message) message = error.error.error;
                    this.toastr.error(`${message}`, "Error");
                },
            });
    }
    ngOnInit(): void {}
}
