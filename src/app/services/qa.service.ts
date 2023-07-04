import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import currentDomain from 'src/app/utils/domainUrls';

@Injectable({
  providedIn: 'root'
})
export class QAService {
  buttonClicked = new EventEmitter();

  constructor(private _httpClient: HttpClient, private _Router: Router) { }
  getAllQuestions(page: number, limit: number, categoryID: string, teacherID: string, answered?: boolean): Observable<any> {
    let url = `${currentDomain}/question?page=${page}&limit=${limit}&categoryID=${categoryID}&teacherID=${teacherID}`
    if (answered) url += `&answered=${answered}`
    return this._httpClient.get(url)
  }
  getCategoriesNotPaginated(params?: any): Observable<any> {
    params.type = params.type || ""
    let url = `${currentDomain}/category/all?type=${params.type}`;
    return this._httpClient.get(url);
  }
  answerQuestion(id: string, data: any): Observable<any> {
    return this._httpClient.patch(
      `${currentDomain}/question/${id}/answer`, data,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    )
  }
}
