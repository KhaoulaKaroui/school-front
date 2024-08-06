import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { SearchComponent } from './components/search/search.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashStudentComponent } from './components/dash-student/dash-student.component';
import { DashTeacherComponent } from './components/dash-teacher/dash-teacher.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'signin', component: LoginComponent  },
  { path: 'signupAdmin', component: SignupComponent, data: { role: 'admin' } },
  { path: 'signupTeacher', component: SignupComponent, data: { role: 'teacher' } },
  { path: 'signupStudent', component: SignupComponent, data: { role: 'student' } },
  { path: 'signupParent', component: SignupComponent, data: { role: 'parent' } },
  { path: 'addCourse', component: AddCourseComponent },
  { path: 'search', component: SearchComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'admin', component: DashboardComponent },
  { path: 'dashStudent', component: DashStudentComponent },
  { path: 'dashTeacher', component: DashTeacherComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
