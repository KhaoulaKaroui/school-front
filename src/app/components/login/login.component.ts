import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMsg: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      pwd: ['', [Validators.required]]
    });
  }


  //   login1(){
  //     if (this.loginForm!.valid) {
  //       console.log(this.loginForm.value);
  //     }
  //    else {
  //   this.errorMsg = " Please Check Your Email/Pwd";
  // }
  // }

  login() {
    console.log("here is user", this.loginForm.value);
    this.userService.login(this.loginForm.value).subscribe(
      (response) => {
        console.log("Here response after login", response);
        if (response.user) {
          sessionStorage.setItem('jwt', response.user);
          //Décodage token pour récupérer Fn,Ln,Emai..
          let decoded: any = jwtDecode(response.user);
          console.log("here decoded", decoded);
          
          
        
          if (decoded.role == 'admin') {
            this.router.navigate(['admin']);
          } else if (decoded.role == 'teacher') {
            sessionStorage.setItem('teacherId', decoded.id);
            this.router.navigate(['dashTeacher']);
          } else if (decoded.role == 'student') {
            this.router.navigate(['dashStudent']);
          } else if (decoded.role == 'parent') {
            this.router.navigate(['']);
          }

        } else {
          this.errorMsg = " Please Check Your Email/Pwd";
        }


      });
  }
}