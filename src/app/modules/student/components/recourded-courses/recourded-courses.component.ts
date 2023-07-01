import { Component, OnInit } from "@angular/core";
import { RecordedCourseService } from "../../services/recordedCourses/recorded-course.service";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: "app-recourded-courses",
    templateUrl: "./recourded-courses.component.html",
    styleUrls: ["./recourded-courses.component.css"],
})
export class RecourdedCoursesComponent implements OnInit {
    recordedCourses: studentRecordedCoursesElement[] = [];
    constructor(
        private recordedCourse: RecordedCourseService,
        private toastr: ToastrService
    ) {
        this.getRecordedCourses();
    }

    getRecordedCourses(): void {
        this.recordedCourse.getStudentRecordedCourses().subscribe({
            next: (data) => {
                this.recordedCourses = data;
                console.log(data);
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
    ngOnInit(): void {
        this.getRecordedCourses();
    }
}

export interface studentRecordedCoursesElement {
    _id?: string;
    studentId: string;
    courseID: {
        _id: string;
        name: string;
        price: number;
        numberOfChapters: number;
        category: string;
    };
    progress: string[];
}
