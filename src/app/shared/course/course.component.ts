import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import currentDomain from 'src/app/utils/domainUrls';
import { CourseService } from 'src/app/services/course.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  courses: courseElement[] = [];
  teachers: any[] = [];
  selectedTeacher: string = 'All';
  selectedLevel: string = 'All';
  currentPage: number = 1;
  pageSize: number = 6;

  constructor(private course: CourseService) {
    this.course.buttonClicked.subscribe(() => {
      this.getCourses();
    });
  }

  ngOnInit(): void {
    this.getCourses();
    this.getAllTeachers();
  }

  getCourses(): void {
    const params = {
      page: this.currentPage,
      teacher:
        this.selectedTeacher !== 'All'
          ? this.selectedTeacher.toLocaleLowerCase()
          : null,
      level:
        this.selectedLevel !== 'All'
          ? this.selectedLevel.toLocaleLowerCase()
          : null,
    };
    this.course.getCourses(params).subscribe({
      next: (data: any) => {
        this.courses = data.map((course: any, index: number) => ({
          ...course,
          id: index + 1,
        }));
      },
    });
  }

  getAllTeachers(): void {
    this.course.getAllTeachers().subscribe({
      next: (data: any) => {
        this.teachers = data.map((teacher: any, index: number) => ({
          ...teacher,
          id: index + 1,
          showBubble: false,
        }));
      },
    });
  }

  onPageChanged(event: any) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getCourses();
  }
  showBubble(course: courseElement) {
    course.showBubble = !course.showBubble;
  }
}

export interface courseElement {
  id?: number;
  _id?: string;
  name: string;
  level: string;
  description: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  daysOfWeek: string[];
  price: number;
  teacher: {
    firstName: string;
    lastName: string;
  };
  showBubble: boolean;
}
