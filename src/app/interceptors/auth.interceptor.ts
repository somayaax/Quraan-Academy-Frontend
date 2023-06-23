import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  checkIfLogin(url: string): boolean {
    return (url.includes('login') || url.includes('register/student'));
  }
  constructor(private _authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.checkIfLogin(request.url))
      return next.handle(request);

    return next.handle(request.clone({ setHeaders: { Authorization: `${this._authService.getToken()}` } }));
  }
}
