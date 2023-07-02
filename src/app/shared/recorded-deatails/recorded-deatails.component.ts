import { Component } from '@angular/core';
import { RecordedCoursesService } from 'src/app/services/recorded-courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recorded-deatails',
  templateUrl: './recorded-deatails.component.html',
  styleUrls: ['./recorded-deatails.component.css']
})
export class RecordedDeatailsComponent {

  chapters= [];
  courseId:string='';
  course: {
    _id: string;
    name: string;
    category: {
      name: string;
    };
    numberOfChapters: number;
    price: number;
  } = {
    _id: '',
    name: '',
    category: {
      name: ''
    },
    numberOfChapters: 0,
    price: 0
  };
    constructor(private _recordedDetalis:RecordedCoursesService, private route: ActivatedRoute){}

  ngOnInit(){
    this.courseId =  this.route.snapshot.paramMap.get('id') ?? '';
    this.getRecordedCourses();
    this.getCourseById(this.courseId);
  }

  getRecordedCourses():void{
    this._recordedDetalis.getChaptersOfRecordedCourse(this.courseId).subscribe({
      next: (res: any) => {
        if (res.status === 200) {
          this.chapters = res.body;
          console.log(this.chapters);
          
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getCourseById(id:string){
    this._recordedDetalis.getCourseById(this.courseId).subscribe({
      next: (res: any) => {
        if (res.status === 200) {
          this.course = res.body;
          console.log(this.course);
          
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
    enrollCourse(id:string) {
      this._recordedDetalis.enrollCourse(id,'true').subscribe({
        next: (res: any) => {
          if (res.status === 200) {
            console.log(res);
            window.location.href = res.body;
            
          }
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

