import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
courseForm!: FormGroup;
course: any= [];
id: any;

  constructor(
    private courseService: CourseService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.courseService.getCourseById(this.id).subscribe(
      (data) => {
        this.course = data.course;
      }
    );
  }

  editCourse(){
    console.log("Here is Course Object", this.course);
    this.courseService.editCourse(this.course).subscribe(
      (response) => {
        console.log("Here Response Edit Course from BE", response.isEdited);
        this.router.navigate(['dashTeacher']);
      }
    )
    
  }

}
