import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userURL: string= 'http://localhost:3000/api/users';

  constructor( private http: HttpClient ) { }


  // signup(user: any, photo: File){
  signup(user: any){
    let fData = new FormData();
    fData.append("firstName", user.firstName);
    fData.append("lastName", user.lastName);
    fData.append("tel", user.tel);
    fData.append("address", user.address);
    fData.append("email", user.email);
    fData.append("pwd", user.pwd);
    fData.append("speciality", user.speciality);
    fData.append("telChild", user.telChild);
    // fData.append("pathPhoto", photo);
    fData.append("role", user.role);

    console.log(fData);
  
    return this.http.post<{ isAdded: boolean}>(this.userURL + '/signup', user);
  }


  login(user: any){
    return this.http.post<{ msg: string, user: any}>(this.userURL + '/signin', user);
  }

  getAllUsers(){
    return this.http.get<{users: any}>(this.userURL);
  }

  deleteUser(id: any){
    return this.http.delete<{isDeleted: Boolean}>(`${this.userURL}/${id}`);
  }


}
