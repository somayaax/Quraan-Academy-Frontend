import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import currentDomain from 'src/app/utils/domainUrls';

@Injectable({
  providedIn: 'root'
})
export class RecordedCourseCategoryService {
  domain: string = currentDomain;
  buttonClicked = new EventEmitter();

  constructor(private http: HttpClient) { }
  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }

  getRecordedCourseCategoriesPaginated(params?: any): Observable<any> {
    let url = `${this.domain}/admin/recordedCourseCategory/getAllRecordedCourseCategory?page=${params.page}`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }
  getRecordedCourseCategoriesNotPaginated(): Observable<any> {
    let url = `${this.domain}/admin/recordedCourseCategory/allCategories`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }
}
