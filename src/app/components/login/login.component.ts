import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      pwd: ['', [Validators.required]]
    });
  }

  // Méthode de soumission du formulaire
  onSubmit(): void {
    if (this.loginForm!.valid) {
      // Effectuer l'authentification ou d'autres actions nécessaires
      console.log(this.loginForm.value);
    }
  }
}