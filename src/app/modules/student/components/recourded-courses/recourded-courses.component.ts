import { Component, OnInit, SimpleChanges } from "@angular/core";
import { RecordedCourseService } from "../../services/recordedCourses/recorded-course.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-recourded-courses",
  templateUrl: "./recourded-courses.component.html",
  styleUrls: ["./recourded-courses.component.css"],
})
export class RecourdedCoursesComponent implements OnInit {
  recordedCourses: studentRecordedCoursesElement[] = [];
  filteredCourses: any[] = [];
  selectedCategory: any = "";
  constructor(
    private recordedCourse: RecordedCourseService,
    private toastr: ToastrService
  ) { }

  getRecordedCourses(): void {
    this.recordedCourse.getStudentRecordedCourses().subscribe({
      next: (data) => {
        this.recordedCourses = data;
        this.filteredCourses = this.recordedCourses;
      },
      error: (error: any) => {
        let {
          error: { message },
        } = error;
        if (!message) message = error.error.error;
        this.toastr.error(`${message}`, "Error");
      },
    });
  }
  ngOnInit(): void {
    this.getRecordedCourses();
    this.filterCourses();
  }

  onSelectCategory(event: Event): void {
    const target = event.target as HTMLSelectElement;
    if (target) {
      const category = target.value;
      this.selectedCategory = category;
      this.filterCourses();
    }
  }

  filterCourses(): void {
    if (this.selectedCategory === 'finished') {
      this.filteredCourses = this.recordedCourses.filter(course => course.progress.length === course.courseID.numberOfChapters);
    } else if (this.selectedCategory === 'inProgress') {
      this.filteredCourses = this.recordedCourses.filter(course => course.progress.length !== course.courseID.numberOfChapters);
    } else {
      this.filteredCourses = this.recordedCourses;
    }
  }
}

export interface studentRecordedCoursesElement {
  _id?: string;
  studentId: string;
  courseID: {
    _id: string;
    name: string;
    price: number;
    numberOfChapters: number;
    category: string;
  };
  progress: string[];
}
