import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  role: string = '';
  imgSrc: string = '';
  header: string = '';
  error: string = '';
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  });

  constructor(
    private _Router: Router,
    private _authService: AuthService,
    private _ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe((params) => {
      const newRole = params['role'];

      if (!['admin', 'student', 'teacher'].includes(newRole)) {
        this._Router.navigate(['/notfound']);
      } else {
        this.role = newRole;
        this.setRoleProperties();
      }
    });
  }

  setRoleProperties() {
    if (this.role === 'admin') {
      this.imgSrc = 'assets/bg/admin.jpg';
      this.header = 'Admin Panel';
    } else if (this.role === 'teacher') {
      this.imgSrc = 'assets/bg/admin.jpg';
      this.header = 'Teacher Login';
    } else if (this.role === 'student') {
      this.imgSrc = 'assets/bg/x.jpg';
      this.header = 'Student Login';
    }
  }

  loginSubmit(login: FormGroup) {
    this._authService.login(login.value, this.role).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res.token) {
          localStorage.setItem('token', res.token);
          this._authService.currentUser.next(this._authService.getDecodedToken());
          this._Router.navigate(['/home']);
        }
      },
      error: (err) => {
        console.log(err);
        this.error = err.error.error;
      }
    });
  }
}
