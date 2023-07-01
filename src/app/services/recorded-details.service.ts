import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import currentDomain from 'src/app/utils/domainUrls';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecordedDetailsService {

  constructor(private _httpClient:HttpClient) { }

  requestOptions:object = { 
    observe: 'response'
  };

  getChaptersOfRecordedCourse(courseId: string): Observable<any> {
    return this._httpClient.get(
      `${currentDomain}/chapters/recordedCourse/${courseId}`,
      this.requestOptions)
  }

}
