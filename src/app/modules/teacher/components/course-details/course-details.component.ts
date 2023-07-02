import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../../services/teacher.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  id: string = '';
  course: any;
  isLoading: boolean = true;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _teacherService: TeacherService,
    private toastr: ToastrService,
    private _Router: Router
  ) {
    this.id = this._activatedRoute.snapshot.params['id'];
    this.getCourseDetails();
    // console.log(this.course);
  }

  ngOnInit(): void { }

  getCourseDetails() {
    this._teacherService.getCourseDetails(this.id).subscribe({
      next: (data) => {
        this.course = data;
        this.isLoading = false;
        console.log(data);
      },
      error: (error: any) => {
        if (error.status === 404) {
          this.toastr.error(`${error.error.error}`, 'Error');
          this._Router.navigate(['/teacher/courses']);
        } else {
          this.toastr.error('Cannot get course details', 'Error');
        }
        this.isLoading = false;
      },
    });
  }
  formatDate(dateStr: string) {
    const date = new Date(dateStr);
    // const formattedDate = new Intl.DateTimeFormat("ar-EG").format(date);
    const formattedDate = new Intl.DateTimeFormat('en-GB').format(date);
    return formattedDate;
  }
  hasSessionEnded(session: any): boolean {
    const sessionDate = new Date(session.date);
    const sessionTime = session.startTime;
    sessionDate.setHours(Number(sessionTime.split(':')[0]));
    sessionDate.setMinutes(Number(sessionTime.split(':')[1]));
    const today = new Date()
    return (today > sessionDate);
  }
}
