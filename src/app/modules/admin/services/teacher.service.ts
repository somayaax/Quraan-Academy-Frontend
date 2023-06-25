import { Injectable } from '@angular/core';
import currentDomain from 'src/app/utils/domainUrls';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  domain: string = currentDomain;
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
}
