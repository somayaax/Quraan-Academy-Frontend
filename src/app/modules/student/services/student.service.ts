import { Injectable, EventEmitter } from '@angular/core';
import currentDomain from 'src/app/utils/domainUrls';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  domain: string = currentDomain;
  buttonClicked = new EventEmitter();

  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }

  getStudentCourses(params?: any): Observable<any> {
    let url = `${this.domain}/student/courses?page=${params.page}`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  getCourseDetails(id: string): Observable<any> {
    let url = `${this.domain}/student/course/${id}`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }
  getSessionDetails(id: string): Observable<any> {
    let url = `${this.domain}/student/session/${id}`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }}
