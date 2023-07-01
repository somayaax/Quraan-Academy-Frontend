import { Component } from '@angular/core';
import { RecordedCoursesService } from 'src/app/services/recorded-courses.service';

@Component({
  selector: 'app-recorded-courses',
  templateUrl: './recorded-courses.component.html',
  styleUrls: ['./recorded-courses.component.css']
})
export class RecordedCoursesComponent {

  recordedCourses = [];
  categories: { name: string, _id: string }[] = [];
  category = '';
  limit = 6;
  currentPage: number = 1;
  hasNextPage:boolean = false;
  hasPrevPage:boolean =false;
  constructor(private _RecordedCoursesService:RecordedCoursesService){}

  ngOnInit(){
    this.getRecordedCourses();
    this._RecordedCoursesService.getAllRecordedCourseCategory().subscribe({
      next: (res: any) => {
        if (res.status === 200) {
          this.categories = res.body;
        }
        
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getRecordedCourses():void{
    this._RecordedCoursesService.getAllRecordedCourses(this.currentPage,this.limit,this.category).subscribe({
      next: (res: any) => {
        if (res.status === 200) {
          this.recordedCourses = res.body.docs;
          this.hasNextPage = res.body.hasNextPage;
          this.hasPrevPage = res.body.hasPrevPage;
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  changeCategory() {
    this.currentPage = 1;
    this.getRecordedCourses()
  }

  nextPage() {
    if (this.hasNextPage) {
      this.currentPage++;
      this.getRecordedCourses()
    }
  }
  prevPage() {
    if (this.hasPrevPage) {
      this.currentPage--;
      this.getRecordedCourses()
    }
  }
}
