import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {

  page: number = 1;
  selectedTeacher: string = 'None';
  selectedLevel: string = 'All';
  courses: courseElement[] = [];
  constructor(private course: CourseService) {
    this.getCourses();
  }

  getCourses(): void {
    const params = {
      page: this.page,
      teacher: this.selectedTeacher!== 'None' ? this.selectedTeacher.toLocaleLowerCase()  : null,
      level: this.selectedLevel !== 'All' ? this.selectedLevel.toLocaleLowerCase()  : null
    };
    this.course.getcourses(params).subscribe({
      next: (data: any) => {
        this.courses = data.map((course: any, index: number) => ({
          ...course,
          startDate: course.startDate.split('T')[0],
          endDate: course.endDate.split('T')[0],
          id: index + 1
        }));
      }
    });
  }

  openAddCourseModal(): void {
   
  }

  ngOnInit(): void {
    this.getCourses();
  }
}

export interface courseElement {
  id?: number,
  _id?: string,
  name: string,
  level: string,
  description: string,
  startDate: string,
  endDate: string,
  startTime: string,
  endTime: string,
  daysOfWeek: string[],
  price: number,
  teacher: string,
};
