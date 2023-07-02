import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})

export class CourseDetailsComponent implements OnInit {
  id: string = '';
  course: any;
  isLoading: boolean = true;

  constructor(private _activatedRoute: ActivatedRoute,
    private _studentService: StudentService,
    private toastr: ToastrService,
    private _Router: Router) {
    this.id = this._activatedRoute.snapshot.params['id'];
    this.getCourseDetails();
    // console.log(this.course);
  }

  ngOnInit(): void {

  }

  getCourseDetails() {
    this._studentService.getCourseDetails(this.id).subscribe({
      next: (data) => {
        this.course = data;
        this.isLoading = false;
      },
      error: (error: any) => {        
        if (error.status === 404) {
          this.toastr.error(`${error.error.error}`, "Error");
          this._Router.navigate(['/teacher/courses'])
        }
        else {
          this.toastr.error('Cannot get course details', "Error");
        }
        this.isLoading = false
      },
    })
  }
  formatDate(dateStr:string){
    const date = new Date(dateStr);    
    // const formattedDate = new Intl.DateTimeFormat("ar-EG").format(date);
    const formattedDate = new Intl.DateTimeFormat("en-GB").format(date);
    return formattedDate;
    
  }
}

