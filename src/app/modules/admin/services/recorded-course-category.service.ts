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
        params.type = params.type || ""
        let url = `${this.domain}/admin/category/all?page=${params.page}&type=${params.type}&limit=${params.limit}`;
        return this.http.get(url).pipe(catchError(this.handleError));
    }
    getRecordedCourseCategoriesNotPaginated(params?: any): Observable<any> {
        params.type = params.type || ""
        let url = `${this.domain}/admin/category/allCategories?type=${params.type}`;
        return this.http.get(url).pipe(catchError(this.handleError));
    }

    addRecordedCourseCategory(category: any): Observable<any> {
        const formData = {
            name: category["name"],
            type: category["type"],
        };
        return this.http
            .post(`${this.domain}/admin/category/add`, formData)
            .pipe(catchError(this.handleError));
    }

    updateCategory(id: string, category: any): Observable<any> {
        const formData = {
            name: category["name"],
        };
        return this.http
            .patch(
                `${this.domain}/admin/category/${id}`,
                formData
            )
            .pipe(catchError(this.handleError));
    }
    getCategoryById(id: string): Observable<any> {
        return this.http
            .get(`${this.domain}/admin/category/${id}/details`)
            .pipe(catchError(this.handleError));
    }

    deleteCategory(id: string): Observable<any> {
        return this.http
            .delete(`${this.domain}/admin/category/${id}`)
            .pipe(catchError(this.handleError));
    }
}
