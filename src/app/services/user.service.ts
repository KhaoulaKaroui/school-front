import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userURL: string= 'http://localhost:3000/api/users';

  constructor( private http: HttpClient ) { }




  signup(user: any, photo: File, cv:File){
    let fData = new FormData() ;
    fData.append("firstName", user.firstName);
    fData.append("lastName", user.lastName);
    fData.append("email", user.email);
    fData.append("address", user.address);
    fData.append("tel", user.tel);
    fData.append("pwd", user.pwd);
    fData.append("role", user.role);
    fData.append("pathPhoto", photo);
    fData.append("speciality", user.speciality);
    fData.append("cv", cv);
    fData.append("telChild", user.telChild);
    return this.http.post<{ isAdded: boolean}>(this.userURL + '/signup', fData);
  }







}
