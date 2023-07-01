import { Component } from '@angular/core';
import { RecordedDetailsService } from 'src/app/services/recorded-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recorded-deatails',
  templateUrl: './recorded-deatails.component.html',
  styleUrls: ['./recorded-deatails.component.css']
})
export class RecordedDeatailsComponent {

  courseId:string='';
  constructor(private _recordedDetalis:RecordedDetailsService, private route: ActivatedRoute){}

  ngOnInit(){
    this.courseId =  this.route.snapshot.paramMap.get('id') ?? '';
    this.getRecordedCourses();
  }

  getRecordedCourses():void{
    this._recordedDetalis.getChaptersOfRecordedCourse(this.courseId).subscribe({
      next: (res: any) => {
        if (res.status === 200) {
          // this.recordedCourses = res.body.docs;
          // this.hasNextPage = res.body.hasNextPage;
          // this.hasPrevPage = res.body.hasPrevPage;
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
