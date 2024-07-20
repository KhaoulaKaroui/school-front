import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent , pathMatch: 'full'},
  { path: 'signin', component: LoginComponent  },
  { path: 'inscription', component: SignupComponent },
  { path: 'signupAdmin', component: SignupComponent },
  { path: 'signupTeacher', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
