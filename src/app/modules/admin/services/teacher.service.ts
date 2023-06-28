import { EventEmitter, Injectable } from '@angular/core';
import currentDomain from 'src/app/utils/domainUrls';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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

  getTeachers(params?: any): Observable<any> {
    let url = `${this.domain}/teacher/?page=${params.page}`;
    if (params && params.gender) {
      url += `&gender=${params.gender}`;
    }
    return this.http.get(url).pipe(catchError(this.handleError));
  }
  getTeacher(id: string): Observable<any> {
    return this.http
      .get(`${this.domain}/teacher/${id}`)
      .pipe(catchError(this.handleError));
  }

  addNewTeacher(formValue: any): Observable<any> {
    const formData = {
      firstName: formValue['firstName'],
      lastName: formValue['lastName'],
      email: formValue['email'],
      password: formValue['password'],
      DOB: formValue['DOB'],
      gender: formValue['gender'],
    };

    return this.http
      .post(`${this.domain}/signUp/Teacher`, formData)
      .pipe(catchError(this.handleError));
  }
  deleteTeacher(id: string): Observable<any> {
    return this.http
      .delete(`${this.domain}/teacher/${id}`)
      .pipe(catchError(this.handleError));
  }
  updateTeacher(id: string, formValue: any): Observable<any> {
    const formData = {
      firstName: formValue['firstName'],
      lastName: formValue['lastName'],
      email: formValue['email'],
      password: formValue['password'],
      DOB: formValue['DOB'],
      gender: formValue['gender'],
    };

    return this.http
      .patch(`${this.domain}/teacher/${id}`, formData)
      .pipe(catchError(this.handleError));
  }
}
