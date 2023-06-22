import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errors: string = ""
  RegisterForm = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(3)]),
    last_name: new FormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9&@]{3,8}$')]),
    DOB: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
  })
  
  constructor(private _Router: Router) { }

  ngOnInit(): void {
  }
  
}
