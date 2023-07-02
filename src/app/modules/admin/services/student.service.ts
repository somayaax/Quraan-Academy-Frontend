import { EventEmitter, Injectable } from '@angular/core';
import currentDomain from 'src/app/utils/domainUrls';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  domain: string = currentDomain;
  buttonClicked = new EventEmitter();
  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }

  getStudents(params?: any): Observable<any> {
    let url = `${this.domain}/student/?page=${params.page}`;
    if (params && params.gender) {
      url += `&gender=${params.gender}`;
    }
    if (params && params.DOB) {
      url += `&DOB=${params.DOB}`;
    }
    return this.http.get(url).pipe(catchError(this.handleError));
  }


  updateStudentProfile(newData: any): Observable<any> {
    const { _id, createdAt,updatedAt,__v, ...updatedData } = newData;
    return this.http.patch(`${this.domain}/student/updateprofile`,updatedData);
  }

  getStudentProfile(): Observable<any> {
    return this.http.get(`${this.domain}/student/profile`).pipe(catchError(this.handleError));
  }
 

}