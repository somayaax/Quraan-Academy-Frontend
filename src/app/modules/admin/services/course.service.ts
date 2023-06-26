import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import {courseElement} from '../components/list-courses/list-courses.component'
import currentDomain from 'src/app/utils/domainUrls';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  domain: string = currentDomain;
  buttonClicked = new EventEmitter();

  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }

  getcourses(params?: any): Observable<any> {
    let url = `${this.domain}/course/?page=${params.page}`;
    if (params && params.teacher) {
      url += `&teacher=${params.teacher}`;
    }
    if (params && params.level) {
      url += `&level=${params.level}`;
    }
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  addNewCourse(formValue: any): Observable<any> {
    const formData = {
      name: formValue['name'],
      level: formValue['level'],
      description: formValue['description'],
      numberOfSessions: formValue['numberOfSessions'],
      price: formValue['price'],
      startDate: formValue['startDate'],
      endDate: formValue['endDate'],
      startTime: formValue['startTime'],
      endTime: formValue['endTime'],
      teacher: formValue['teacher'],
      daysOfWeek: formValue['daysOfWeek'],
    };

    return this.http
      .post(`${this.domain}/course/`, formData)
      .pipe(catchError(this.handleError));
  }

  deleteCourse(id : string) : Observable<any> {
    return this.http.delete(`${this.domain}/course/${id}`).pipe(catchError((this.handleError)));
  }
  getCourse(id : string) : Observable<any>  {
    return this.http.get(`${this.domain}/course/${id}`).pipe(catchError((this.handleError)));
  }

  updateCourse(formValue :any, id: string) : Observable<any> {
    const formData: FormData = new FormData();

    formData.append('name', formValue['name']);
    formData.append('level', formValue['level']);
    formData.append('description', formValue['description']);
    formData.append('numberOfSessions', formValue['numberOfSessions']);
    formData.append('price', formValue['price']);
    formData.append('startDate', formValue['startDate']);
    formData.append('endDate', formValue['endDate']);
    formData.append('startTime', formValue['startTime']);
    formData.append('endTime', formValue['endTime']);
    formData.append('teacher', formValue['teacher']);
    formData.append('daysOfWeek', formValue['daysOfWeek']);
   

    return this.http.patch(`${this.domain}/course/${id}`,formData).pipe(catchError((this.handleError)));
  }
}


