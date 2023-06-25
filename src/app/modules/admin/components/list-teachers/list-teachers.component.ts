import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.component.html',
  styleUrls: ['./list-teachers.component.css'],
})
export class ListTeachersComponent implements OnInit {
  page: number = 1;
  selectedGender: string = 'All';
  teachers: teacherElement[] = [];

  constructor(private teacher: TeacherService) {
    this.getTeachers();
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
