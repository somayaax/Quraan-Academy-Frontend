import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import currentDomain from 'src/app/utils/domainUrls';

@Injectable({
  providedIn: 'root'
})
export class QAService {

  constructor(private _httpClient: HttpClient, private _Router: Router) { }
  getAllQuestions(page: number, limit: number, categoryID: string, teacherID: string): Observable<any> {
    return this._httpClient.get(
      `${currentDomain}/question?page=${page}&limit=${limit}&categoryID=${categoryID}&teacherID=${teacherID}`
    )
  }
  getCategories(): Observable<any> {
    return this._httpClient.get(
      `${currentDomain}/question/category`
    )
  }
}
