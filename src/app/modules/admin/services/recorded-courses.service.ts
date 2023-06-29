import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import currentDomain from "src/app/utils/domainUrls";

@Injectable({
    providedIn: "root",
})
export class RecordedCoursesService {
    domain: string = currentDomain;
    buttonClicked = new EventEmitter();

    constructor(private http: HttpClient) {}

    handleError(error: HttpErrorResponse) {
        return throwError(() => error);
    }

    getAllRecordedCoursesNotPaginated(): Observable<any> {
        let url = `${this.domain}/admin/recordedCourses/allRecordedCourses`;
        return this.http.get(url).pipe(catchError(this.handleError));
    }

    getRecordeCourses(params?: any): Observable<any> {
        let url = `${this.domain}/admin/recordedCourses/getAllRecordedCourses?page=${params.page}`;
        if (params && params.category) {
            url += `&category=${params.category}`;
        }
        return this.http.get(url).pipe(catchError(this.handleError));
    }

    addRecordedCourse(formValue: any): Observable<any> {
        const formData = {
            name: formValue["name"],
            category: formValue["category"],
            price: formValue["price"],
        };
        return this.http
            .post(`${this.domain}/admin/recordedCourses/add`, formData)
            .pipe(catchError(this.handleError));
    }

    deleterecordedCourses(id: string): Observable<any> {
        return this.http
            .delete(`${this.domain}/admin/recordedCourses/${id}`)
            .pipe(catchError(this.handleError));
    }

    getRecordedCourseById(id: string): Observable<any> {
        return this.http
            .get(`${this.domain}/admin/recordedCourses/${id}/details`)
            .pipe(catchError(this.handleError));
    }

    updateRecordedCourse(id: string, formValue: any): Observable<any> {
        const formData = {
            name: formValue["name"],
            category: formValue["category"],
            price: formValue["price"],
        };
        return this.http
            .patch(`${this.domain}/admin/recordedCourses/${id}`, formData)
            .pipe(catchError(this.handleError));
    }
}
