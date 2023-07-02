import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
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
  hasPrevPage: boolean = false;
  hasNextPage: boolean = false;
  role: string = 'none';
  // role = none -> Navigate to login
  // role = student -> Navigate to payment
  // role = teacher -> No button
  constructor(private course: CourseService, auth: AuthService) {
    this.course.buttonClicked.subscribe(() => {
      this.getCourses();
    });
    this.role = auth.getRole();
    console.log(this.role);
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
        console.log(data);
        this.courses = data.docs.map((course: any, index: number) => ({
          ...course,
          id: index + 1,
        }));
        this.hasNextPage = data.hasNextPage;
        this.hasPrevPage = data.hasPrevPage;
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
  nextPage() {
    if (this.hasNextPage) {
      this.currentPage++;
      this.getCourses();
    }
  }
  prevPage() {
    if (this.hasPrevPage) {
      this.currentPage--;
      this.getCourses();
    }
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
