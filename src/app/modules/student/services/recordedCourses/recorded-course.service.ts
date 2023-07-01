import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import currentDomain from "src/app/utils/domainUrls";

@Injectable({
    providedIn: "root",
})
export class RecordedCourseService {
    domain: string = currentDomain;
    constructor(private http: HttpClient) {}

    handleError(error: HttpErrorResponse) {
        return throwError(() => error);
    }
    getStudentRecordedCourses(): Observable<any> {
        return this.http
            .get(`${this.domain}/student/recordedCourses`)
            .pipe(catchError(this.handleError));
    }
}
