import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import currentDomain from 'src/app/utils/domainUrls';
@Injectable({
  providedIn: 'root'
})
export class QAService {
  constructor(private _httpClient: HttpClient, private _Router: Router) { }
  getAllQuestions(page: number, limit: number, categoryID: string): Observable<any> {
    return this._httpClient.get(
      `${currentDomain}/question?page=${page}&limit=${limit}&categoryID=${categoryID}`
    )
  }
  deleteQuestion(id: string): Observable<any> {
    return this._httpClient.delete(
      `${currentDomain}/admin/question/${id}`
    )
  }
  deleteAnswer(id: string): Observable<any> {
    return this._httpClient.patch(
      `${currentDomain}/admin/question/${id}/remove/answer`,{}
    )
  }
  getCategories(): Observable<any> {
    return this._httpClient.get(
      `${currentDomain}/question/category`
    )
  }
  getCategoriesNotPaginated(params?: any): Observable<any> {
    params.type = params.type || ""
    let url = `${currentDomain}/admin/category/allCategories?type=${params.type}`;
    return this._httpClient.get(url);
}
}
