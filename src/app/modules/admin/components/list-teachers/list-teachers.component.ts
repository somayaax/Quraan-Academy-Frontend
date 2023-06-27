import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTeacherModalComponent } from '../add-teacher-modal/add-teacher-modal.component';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.component.html',
  styleUrls: ['./list-teachers.component.css'],
})
export class ListTeachersComponent implements OnInit {
  page: number = 1;
  selectedGender: string = 'All';
  teachers: teacherElement[] = [];

  constructor(
    private teacher: TeacherService,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) {
    this.teacher.buttonClicked.subscribe(() => {
      this.getTeachers();
    });
  }

  getTeachers(): void {
    const params = {
      page: this.page,
      gender: this.selectedGender !== 'All' ? this.selectedGender : null,
    };
    this.teacher.getTeachers(params).subscribe({
      next: (data: any) => {
        this.teachers = data.map((teacher: any, index: number) => ({
          ...teacher,
          id: index + 1,
        }));
      },
    });
  }

  openAddTeacherModal(): void {
    this.dialog.open(AddTeacherModalComponent, { width: '800px' });
  }
  delTeacher(id: any) {
    this.teacher.deleteTeacher(id).subscribe({
      next: (data) => {
        this.teacher.buttonClicked.emit();
        this.toastr.success('Teacher deleted successfully', 'Success');
      },
      error: (error) => {
        let {
          error: { message },
        } = error;
        if (!message) message = error.message;

        if (error.status === 404) {
          this.toastr.error(
            'Can not delete teacher that is teaching courses',
            'Error'
          );
        } else {
          this.toastr.error('Can not delete teacher ', 'Error');
          console.log(`MESSAGE : ${message}`, 'Could not delete teacher');
        }
      },
    });
  }
  ngOnInit(): void {
    this.getTeachers();
  }
}

export interface teacherElement {
  id?: number;
  _id?: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  DOB: string;
}
