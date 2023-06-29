import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import currentDomain from 'src/app/utils/domainUrls';

@Injectable({
  providedIn: 'root'
})
export class ChaptersService {

  domain: string = currentDomain;
  buttonClicked = new EventEmitter();

  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }

  addNewChapters(chapters: any, recordedCourseId: string) : Observable<any> {
    return this.http
      .post(`${this.domain}/admin/chapters/${recordedCourseId}`, chapters)
      .pipe(catchError(this.handleError));
  }
}
