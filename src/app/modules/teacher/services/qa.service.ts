import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import currentDomain from 'src/app/utils/domainUrls';

@Injectable({
  providedIn: 'root'
})
export class QAService {
  buttonClicked = new EventEmitter();

  constructor(private _httpClient: HttpClient) { }

  getCategoriesNotPaginated(): Observable<any> {
    let type = 'question'
    let url = `${currentDomain}/category/allCategories?type=${type}`;
    return this._httpClient.get(url);
}
  getTeacherAnswers(page: number, limit: number, categoryID: string, teacherID: string): Observable<any> {
    return this._httpClient.get(
      `${currentDomain}/question?page=${page}&limit=${limit}&categoryID=${categoryID}&teacherID=${teacherID}`
    )
  }
  editAnswer(id: string, data: any): Observable<any> {
    return this._httpClient.patch(
      `${currentDomain}/question/${id}/answer`, data,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    )
  }
  deleteAnswer(id: string): Observable<any> {
    return this._httpClient.patch(
      `${currentDomain}/question/${id}/remove/answer`, {},
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    )
  }
}
