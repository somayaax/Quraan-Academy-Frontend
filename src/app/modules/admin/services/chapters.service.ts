import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import currentDomain from "src/app/utils/domainUrls";

@Injectable({
    providedIn: "root",
})
export class ChaptersService {
    domain: string = currentDomain;
    buttonClicked = new EventEmitter();

    constructor(private http: HttpClient) {}

    handleError(error: HttpErrorResponse) {
        return throwError(() => error);
    }

    addNewChapters(chapters: any, recordedCourseId: string): Observable<any> {
        return this.http
            .post(`${this.domain}/admin/chapters/${recordedCourseId}`, chapters)
            .pipe(catchError(this.handleError));
    }

    getChaptersForRecordedCourse(id: string): Observable<any> {
        return this.http
            .get(`${this.domain}/admin/chapters/recordedCourse/${id}`)
            .pipe(catchError(this.handleError));
    }

    deleteChapter(id: string): Observable<any> {
        return this.http
            .delete(`${this.domain}/admin/chapters/${id}`)
            .pipe(catchError(this.handleError));
    }

    updateChapter(id: string, chapter: any): Observable<any> {
        return this.http
            .patch(`${this.domain}/admin/chapters/${id}`, chapter)
            .pipe(catchError(this.handleError));
    }

    getChapterById(id: string): Observable<any> {
        return this.http
            .get(`${this.domain}/admin/chapters/${id}`)
            .pipe(catchError(this.handleError));
    }
}
