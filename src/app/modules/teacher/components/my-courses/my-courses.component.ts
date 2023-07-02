import { Component } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css'],
})
export class MyCoursesComponent {
  courses: courseElement[] = [];
  currentPage: number = 1;
  pageSize: number = 6;
  selectedLevel: string = 'All';
  hasNextPage: boolean = false;
  hasPrevPage: boolean = false;
  constructor(private teacher: TeacherService) {
    this.teacher.buttonClicked.subscribe(() => {
      this.getCourses();
    });
  }
  ngOnInit(): void {
    this.getCourses();
  }
  getCourses(): void {
    const params = {
      page: this.currentPage,
      level:
        this.selectedLevel !== 'All'
          ? this.selectedLevel.toLocaleLowerCase()
          : null,
    };
    this.teacher.getTeacherCourses(params).subscribe({
      next: (data: any) => {
        this.courses = data.docs.map((course: any, index: number) => ({
          ...course,
          id: index + 1,
        }));
        this.hasNextPage = data.hasNextPage;
        this.hasPrevPage = data.hasPrevPage;
      },
    });
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
  countOfStudents: number;
}
