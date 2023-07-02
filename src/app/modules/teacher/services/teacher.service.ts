import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import currentDomain from 'src/app/utils/domainUrls';
@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  domain: string = currentDomain;
  buttonClicked = new EventEmitter();

  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
  getSessions(params?: any): Observable<any> {
    let url = `${this.domain}/session/teacher`;
    if (params && params.month) {
      url += `?month=${params.month}`;
    }
    if (params && params.year) {
      url += `&year=${params.year}`;
    }

    return this.http.get(url).pipe(catchError(this.handleError));
  }
  updateTeacherProfile(newData: any): Observable<any> {
    const { _id, createdAt,updatedAt,__v, ...updatedData } = newData;
    return this.http.patch(`${this.domain}/teacher/updateprofile`,updatedData);
  }

  getTeacherProfile(): Observable<any> {
    return this.http.get(`${this.domain}/teacher/profile`).pipe(catchError(this.handleError));
  }
}
