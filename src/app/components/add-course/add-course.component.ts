import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  courseForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  addCourse(){
    console.log("Here Course", this.courseForm.value);
    
  }

}
