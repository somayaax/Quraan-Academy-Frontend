import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import currentDomain from 'src/app/utils/domainUrls';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  domain: string = currentDomain;
  buttonClicked = new EventEmitter();

  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
  getSessions(params?: any): Observable<any> {
    let url = `${this.domain}/session`;
    if (params && params.month) {
      url += `?month=${params.month}`;
    }
    if (params && params.year) {
      url += `&year=${params.year}`;
    }

    return this.http.get(url).pipe(catchError(this.handleError));
  }
}
