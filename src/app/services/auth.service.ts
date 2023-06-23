import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import currentDomain from '../utils/domainUrls';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = new BehaviorSubject(null);
  currentUser$ = this.currentUser.asObservable();

  constructor(private _httpClient: HttpClient, private _Router: Router) { }

  login(data: any, role: string): Observable<any> {
    localStorage.removeItem('token');
    return this._httpClient.post(`${currentDomain}/login/${role}`, data, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
  }
  registerStudent(data: any): Observable<any> {
    return this._httpClient.post(`${currentDomain}/signUp/student`, data, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
  }
  registerTeacher(data: any): Observable<any> {
    return this._httpClient.post(`${currentDomain}/signUp/teacher`, data, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
  }

  getToken(): any {
    let token: string = localStorage.getItem('token') || "";
    return token;
  }

  getDecodedToken(): any {
    let token: string = localStorage.getItem('token') || "";
    if(token){
      let decodedToken: any = jwt_decode(token);
      return decodedToken;
    }
  }

  getRole(): any {
    let user = this.getDecodedToken();
    if (user) {
      return user.role;
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUser.next(null);
    this._Router.navigate(['/home'])
  }
}
