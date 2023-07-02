import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import currentDomain from "src/app/utils/domainUrls";

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  domain: string = currentDomain;
  buttonClicked = new EventEmitter();
  
  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }

  getRecordedCourseChapters(id: string): Observable<any> {
    return this.http.get(`${this.domain}/student/recordedCourse/${id}/chapters`).pipe(catchError(this.handleError));
  }

  finishChapter(recordedCourseId: string, chapterId: string): Observable<any> {
    return this.http.patch(`${this.domain}/student/recordedCourse/${recordedCourseId}/chapter/${chapterId}`, {}).pipe(catchError(this.handleError));
  }
}
