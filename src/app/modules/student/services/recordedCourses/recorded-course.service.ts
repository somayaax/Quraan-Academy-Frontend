import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import currentDomain from "src/app/utils/domainUrls";

@Injectable({
    providedIn: "root",
})
export class RecordedCourseService {
    domain: string = currentDomain;
    buttonClicked = new EventEmitter();
    
    constructor(private http: HttpClient) {}

    handleError(error: HttpErrorResponse) {
        return throwError(() => error);
    }
    getStudentRecordedCourses(): Observable<any> {
        return this.http
            .get(`${this.domain}/student/recordedCourses`)
            .pipe(catchError(this.handleError));
    }
    getStudentRecordedCourseById(id: string): Observable<any> {
        return this.http
          .get(`${this.domain}/student/recordedCourse/${id}`)
          .pipe(catchError(this.handleError));
    }
}
