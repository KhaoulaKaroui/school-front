import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMsg: string = "";

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      tel: ['', [Validators.required]], //ajouter le controle de saisie d'un numero du tel
      pwd: ['', [Validators.required]]
    });
  }

  // Méthode de soumission du formulaire
  login(){
    if (this.loginForm!.valid) {
      // Effectuer l'authentification ou d'autres actions nécessaires
      console.log(this.loginForm.value);
    }
   else {
  this.errorMsg = " Please Check Your Email/Pwd";
}
}
}