import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  actualPath: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.actualPath = this.router.url;
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      tel: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [ Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      pwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]]
    });
  }

  signup() {
    if (this.actualPath == '/inscription') {
      this.signupForm.value.role = 'parent';
    } else if (this.actualPath == '/signupAdmin') {
      this.signupForm.value.role = 'admin';
    }  else if (this.actualPath == '/signupTeacher') {
      this.signupForm.value.role = 'teacher';
    } else{
      this.signupForm.value.role = 'student';
    }

console.log("here signupForm", this.signupForm);

  }

}
