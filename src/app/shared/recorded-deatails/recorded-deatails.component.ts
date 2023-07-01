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
  constructor(private _recordedDetalis:RecordedCoursesService, private route: ActivatedRoute){}

  ngOnInit(){
    this.courseId =  this.route.snapshot.paramMap.get('id') ?? '';
    this.getRecordedCourses();
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

}
