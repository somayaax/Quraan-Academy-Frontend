import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import currentDomain from "src/app/utils/domainUrls";

@Injectable({
    providedIn: "root",
})
export class RecordedCourseCategoryService {
    domain: string = currentDomain;
    buttonClicked = new EventEmitter();

    constructor(private http: HttpClient) {}
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

    addRecordedCourseCategory(category: any): Observable<any> {
        const formData = {
            name: category["name"],
        };
        return this.http
            .post(`${this.domain}/admin/recordedCourseCategory/add`, formData)
            .pipe(catchError(this.handleError));
    }

    updateCategory(id: string, category: any): Observable<any> {
        const formData = {
            name: category["name"],
        };
        return this.http
            .patch(
                `${this.domain}/admin/recordedCourseCategory/${id}`,
                formData
            )
            .pipe(catchError(this.handleError));
    }
    getCategoryById(id: string): Observable<any> {
        return this.http
            .get(`${this.domain}/admin/recordedCourseCategory/${id}/details`)
            .pipe(catchError(this.handleError));
    }

    deleteCategory(id: string): Observable<any> {
        return this.http
            .delete(`${this.domain}/admin/recordedCourseCategory/${id}`)
            .pipe(catchError(this.handleError));
    }
}
