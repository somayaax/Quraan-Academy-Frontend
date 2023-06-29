import { Component, OnInit } from "@angular/core";
import { RecordedCoursesService } from "../../services/recorded-courses.service";
import { recordedCourseElement } from "../list-recorded-course/list-recorded-course.component";
import { ToastrService } from "ngx-toastr";
import { ChaptersService } from "../../services/chapters.service";

@Component({
    selector: "app-list-chapters",
    templateUrl: "./list-chapters.component.html",
    styleUrls: ["./list-chapters.component.css"],
})
export class ListChaptersComponent implements OnInit {
    page: number = 1;
    selectedRecordedCourse: string = "None";
    recordedCourses: recordedCourseElement[] = [];
    chapters: chapterElement[] = [];

    constructor(
        private recordedCourse: RecordedCoursesService,
        private toastr: ToastrService,
        private chapter: ChaptersService
    ) {
        this.getRecordedCourses();
    }

    getRecordedCourses(): void {
        this.recordedCourse.getAllRecordedCoursesNotPaginated().subscribe({
            next: (data) => {
                this.recordedCourses = data;
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

    getChaptersForRecordedCourses(): void {
        this.chapter
            .getChaptersForRecordedCourse(this.selectedRecordedCourse)
            .subscribe({
                next: (data) => {
                    this.chapters = data.map(
                        (chapter: chapterElement, index: number) => ({
                            ...chapter,
                            id: index + 1,
                        })
                    );
                },
            });
    }

    ngOnInit(): void {}
}

export interface chapterElement {
    id?: number;
    _id?: string;
    title: string;
    description: number;
    media: number;
    recordedCourse: { name: string };
}
