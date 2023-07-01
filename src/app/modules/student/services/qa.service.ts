import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import currentDomain from 'src/app/utils/domainUrls';

@Injectable({
  providedIn: 'root'
})
export class QAService {

  buttonClicked = new EventEmitter();

  constructor(private _httpClient: HttpClient, private _Router: Router) { }
  getStudentQuestions(page: number, limit: number, categoryID: string, teacherID: string): Observable<any> {
    return this._httpClient.get(
      `${currentDomain}/question/student?page=${page}&limit=${limit}&categoryID=${categoryID}&teacherID=${teacherID}`
    )
  }
  getCategories(): Observable<any> {
    return this._httpClient.get(
      `${currentDomain}/question/category`
    )
  }
  deleteQuestion(id: any): Observable<any> {
    return this._httpClient.delete(
      `${currentDomain}/question/${id}`
    )
  }
  editQuestion(id: any, data: any): Observable<any> {
    return this._httpClient.patch(
      `${currentDomain}/question/${id}`, data,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    )
  }
  askQuestion(data: any): Observable<any> {
    return this._httpClient.post(
      `${currentDomain}/question/ask`, data,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    )
  }
}
