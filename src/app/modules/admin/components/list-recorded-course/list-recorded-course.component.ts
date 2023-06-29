import { Component, OnInit } from "@angular/core";
import { RecordedCoursesService } from "../../services/recorded-courses.service";
import { ToastrService } from "ngx-toastr";
import { RecordedCourseCategoryService } from "../../services/recorded-course-category.service";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { AddRecordedCourseComponent } from "../add-recorded-course/add-recorded-course.component";
import { AddChaptersModalComponent } from "../add-chapters-modal/add-chapters-modal.component";
import { EditRecordedCourseModalComponent } from "../edit-recorded-course-modal/edit-recorded-course-modal.component";

@Component({
    selector: "app-list-recorded-course",
    templateUrl: "./list-recorded-course.component.html",
    styleUrls: ["./list-recorded-course.component.css"],
})
export class ListRecordedCourseComponent implements OnInit {
    page: number = 1;
    selectedCategory: string = "None";
    recordedCourses: recordedCourseElement[] = [];
    categories: categoryElement[] = [];
    dialogConfig = new MatDialogConfig();

    constructor(
        private recordedCourse: RecordedCoursesService,
        private toastr: ToastrService,
        private category: RecordedCourseCategoryService,
        private dialog: MatDialog
    ) {
        this.recordedCourse.buttonClicked.subscribe(() => {
            this.getRecordedCourses();
        });
        this.getCategories();
    }
    ngOnInit(): void {
        this.selectedCategory = "";
        this.getRecordedCourses();
    }

    getRecordedCourses(): void {
        const params = {
            page: this.page,
            category:
                this.selectedCategory !== "None" ? this.selectedCategory : null,
        };
        this.recordedCourse.getRecordeCourses(params).subscribe({
            next: (data) => {
                this.recordedCourses = data.map(
                    (course: recordedCourseElement, index: number) => ({
                        ...course,
                        id: index + 1,
                    })
                );
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

    getCategories(): void {
        this.category.getRecordedCourseCategoriesNotPaginated().subscribe({
            next: (data) => {
                this.categories = data;
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

    openAddCourseModal(): void {
        this.dialog.open(AddRecordedCourseComponent, { width: "800px" });
    }

    openAddChaptersModal(id: any): void {
        console.log(id);
        this.dialogConfig.data = {
            recordedCourseId: id,
        };
        this.dialog.open(AddChaptersModalComponent, this.dialogConfig);
    }

    openEditRecordedCourseModal(id: any): void {
        console.log(id);
        this.dialogConfig.data = {
            recordedCourseId: id,
        };
        this.dialog.open(EditRecordedCourseModalComponent, this.dialogConfig);
    }
    deleteRecordedCourse(id: any) {
        this.recordedCourse.deleterecordedCourses(id).subscribe({
            next: (data) => {
                this.recordedCourse.buttonClicked.emit();
                this.toastr.success(
                    `Recorded course deleted successfully`,
                    "Success"
                );
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
}

export interface recordedCourseElement {
    id?: number;
    _id?: string;
    name: string;
    numberOfChapters: number;
    price: number;
    category: { name: string };
}

export interface categoryElement {
    id?: number;
    _id?: string;
    name: string;
}
