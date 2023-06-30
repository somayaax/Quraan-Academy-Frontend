import { Component, OnInit } from "@angular/core";
import { StudentService } from "../../services/student.service";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

@Component({
    selector: "app-list-students",
    templateUrl: "./list-students.component.html",
    styleUrls: ["./list-students.component.css"],
})
export class ListStudentsComponent implements OnInit {
    page: number = 1;
    selectedGender: string = "All";
    selectedDOB: string = "All";
    students: studentElement[] = [];
    dialogConfig = new MatDialogConfig();
    constructor(private student: StudentService, public dialog: MatDialog) {
        this.student.buttonClicked.subscribe(() => {
            this.getStudents();
        });
    }

    getStudents(): void {
        const params = {
            page: this.page,
            gender: this.selectedGender !== "All" ? this.selectedGender : null,
            DOB: this.selectedDOB !== "All" ? this.selectedDOB : null,
        };
        this.student.getStudents(params).subscribe({
            next: (data: any) => {
                this.students = data.map((student: any, index: number) => ({
                    ...student,
                    id: index + 1,
                }));
            },
        });
    }

    prevPage() {
        if (this.page > 1) {
            this.page--;
            this.getStudents();
        }
    }

    nextPage() {
        this.page++;
        this.getStudents();
    }

    ngOnInit(): void {
        this.getStudents();
    }
}

export interface studentElement {
    id?: number;
    _id?: string;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    DOB: string;
}
