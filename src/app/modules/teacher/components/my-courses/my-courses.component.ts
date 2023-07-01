import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

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
  constructor(private course: CourseService) {
    this.course.buttonClicked.subscribe(() => {
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
    this.course.getCourses(params).subscribe({
      next: (data: any) => {
        this.courses = data.map((course: any, index: number) => ({
          ...course,
          id: index + 1,
        }));
      },
    });
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
  countOfStudents: number;
}
