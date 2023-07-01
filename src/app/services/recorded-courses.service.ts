import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import currentDomain from 'src/app/utils/domainUrls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordedCoursesService {

  constructor(private _httpClient:HttpClient) { }

  requestOptions:object = { 
    observe: 'response'
  };

  getAllRecordedCourses(page: number, limit:number,category: string): Observable<any> {
    return this._httpClient.get(
      `${currentDomain}/recordedCourses/getAllRecordedCourses?page=${page}&limit=${limit}&category=${category}`,
      this.requestOptions)
  }

  getAllRecordedCourseCategory(): Observable<any> {
    return this._httpClient.get(
      `${currentDomain}/category/all`,
      this.requestOptions)
  }

  getChaptersOfRecordedCourse(courseId: string): Observable<any> {
    return this._httpClient.get(
      `${currentDomain}/chapters/recordedCourse/${courseId}`,
      this.requestOptions)
  }
}
