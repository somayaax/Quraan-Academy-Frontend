import { Injectable, EventEmitter } from '@angular/core';
import currentDomain from '../utils/domainUrls';
import { Observable, catchError, throwError } from 'rxjs';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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

  getCourses(params?: any): Observable<any> {
    let url = `${this.domain}/course/?page=${params.page}&filter=upcoming`;
    if (params && params.teacher) {
      url += `&teacher=${params.teacher}`;
    }
    if (params && params.level) {
      url += `&level=${params.level}`;
    }
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  getAllTeachers(): Observable<any> {
    let url = `${this.domain}/teacher/allTeachers`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }
}
