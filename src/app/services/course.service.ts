import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courseURL: string = 'http://localhost:3000/api/courses';

  constructor(
    private http: HttpClient
  ) {}

addCourse(course: any){
  return this.http.post<{ msg: String}>(this.courseURL, course);
}

editCourse(courseObj: any){
  return this.http.put<{ isEdited: string}>(this.courseURL, courseObj);
}

deleteCourse(id: any){
  return this.http.delete<{isDeleted: Boolean}>(`${this.courseURL}/${id}`);
}

getCourseById(id: any){
  return this.http.get<{ course: any }>(`${this.courseURL}/${id}`);
}

getAllCourses(){
  return this.http.get<{courses: any}>(this.courseURL);
}

searchCourses(obj: any){
  return this.http.post<{T: any}>(this.courseURL + "/searchCourse", obj);
}

}
