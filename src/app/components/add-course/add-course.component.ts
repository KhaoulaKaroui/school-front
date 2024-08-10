import { Component, OnInit, ɵresolveComponentResources } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  courseForm!: FormGroup;
  course: any = {}
  constructor(
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addCourse() {
    console.log("Here Course", this.course);
    // this.course.teacherId = "66b0cff79c0f9925046fce96";
    this.course.teacher = sessionStorage.getItem('teacherId');
    this.courseService.addCourse(this.course).subscribe(
      (response) => {
        console.log("Here is your Course Object", response.msg);
        this.router.navigate(['dashTeacher']);
      }
    )

  }

}
