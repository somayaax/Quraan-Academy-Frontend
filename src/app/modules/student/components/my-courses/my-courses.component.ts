import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css'],
})
export class MyCoursesComponent {
  courses: courseElement[] = [];
  currentPage: number = 1;
  pageSize: number = 6;
  hasNextPage: boolean = false;
  hasPrevPage: boolean = false;

  constructor(private student: StudentService) {
    this.student.buttonClicked.subscribe(() => {
      this.getStudentCourses();
    });
  }

  getStudentCourses(): void {
    const params = {
      page: this.currentPage,
    };
    this.student.getStudentCourses(params).subscribe({
      next: (data: any) => {
        this.courses = data.docs;
        this.hasNextPage = data.hasNextPage;
        this.hasPrevPage = data.hasPrevPage;
      },
    });
    this.courses.sort((a, b) => {
      const endDateA = new Date(a.courseId.endDate);
      const endDateB = new Date(b.courseId.endDate);
      return endDateA.getTime() - endDateB.getTime();
    });
  }
  ngOnInit(): void {
    this.getStudentCourses();
  }
  showBubble(course: courseElement) {
    course.showBubble = !course.showBubble;
  }
  nextPage() {
    if (this.hasNextPage) {
      this.currentPage++;
      this.getStudentCourses();
    }
  }
  prevPage() {
    if (this.hasPrevPage) {
      this.currentPage--;
      this.getStudentCourses();
    }
  }

  getDate(stringDate: string): string {
    const date = new Date(stringDate);
    const day = date.getDate(); // day of the month (from 1 to 31)
    const month = date.getMonth() + 1; // month (from 0 to 11)
    const year = date.getFullYear(); // year (as a four-digit number)

    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day
      .toString()
      .padStart(2, '0')}`;
    return formattedDate;
  }
  hasCourseEnded(course: courseElement): boolean {
    const endDate = new Date(course.courseId.endDate);
    return endDate < new Date();
  }
}
export interface courseElement {
  _id?: string;
  studentId: {
    firstName: string;
    lastName: string;
  };
  teacherComment: string;
  courseId: {
    _id:string;
    name: string;
    level: string;
    description: string;
    startDate: string;
    endDate: string;
    daysOfWeek: string[];
  };
  showBubble: boolean;
  countOfStudents: number;
}
