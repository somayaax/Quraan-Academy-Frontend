import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message = ''
  register = ''
  error: string = ""
  RegisterSubmit: any;
  isLoading: boolean = false;
  RegisterForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(3)]),
    lastName: new FormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    DOB: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
  })

  constructor(private _Router: Router, private _authService: AuthService, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.determineRegistrationType();
  }
  determineRegistrationType(): void {
    if (this._ActivatedRoute.snapshot.routeConfig?.path === 'register/teacher') {
      this.register = 'Add Teacher';
      this.RegisterSubmit = this.registerTeacher
    } else if (this._ActivatedRoute.snapshot.routeConfig?.path === 'register') {
      this.register = 'Register Student';
      this.RegisterSubmit = this.registerStudent
    }
  }



  registerTeacher(register: FormGroup): void {
    this.isLoading = true;
    this._authService.registerTeacher(register.value).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.message = 'successfully registered teacher!'
          this.isLoading = false;
        }
      },
      error: (err) => {
        if (err.error.error.includes('E11000 duplicate key error')) {
          this.error = 'Email already exists!';
        } else {
          this.error = err.error.error;
        }
        this.isLoading = false;
      }
    });
  }

  registerStudent(register: FormGroup): void {
    this.isLoading = true;
    this._authService.registerStudent(register.value).subscribe({
      next: (res: any) => {        
        if (res.success) {          
          this._Router.navigate(['/login/user']);
          this.isLoading = false;
        }
      },
      error: (err) => {
        if (err.error.error.includes('E11000 duplicate key error')) {
          this.error = 'Email already exists!';
        } else {
          this.error = err.error.error;
        }
        this.isLoading = false;
      }
    });
  }


}
