import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import currentDomain from 'src/app/utils/domainUrls';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

   domain : string = currentDomain;
  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse ) {
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
    return this.http.get(url).pipe(catchError((this.handleError)));
  }

}
