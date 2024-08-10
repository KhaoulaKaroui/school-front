import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses-tab',
  templateUrl: './courses-tab.component.html',
  styleUrls: ['./courses-tab.component.css']
})
export class CoursesTabComponent implements OnInit {
coursesTab: any =[];

  constructor(
    private router: Router,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(
      (response) => {
        let teacherId= sessionStorage.getItem('teacherId');
        if (teacherId)  {
          this.coursesTab = response.courses.filter((elem: any)=> elem.teacher._id == teacherId);
          console.log('filtred tab',this.coursesTab);
        } else {
          this.coursesTab = response.courses;
        }
      }
    )
  }

  goToInfo(courseId: number) {
    this.router.navigate([`courseInfo/${courseId}`]);
  }

  goToEditCourse(courseId: any){
    this.router.navigate([`editCourse/${courseId}`])
  }

  deleteCourse(id: any){
    this.courseService.deleteCourse(id).subscribe(
      (data) => {
        console.log("Here response Delete Course from BE", data.isDeleted);
        if (data.isDeleted) {
          this.courseService.getAllCourses().subscribe(
            (datas) => {
              this.coursesTab = datas.courses
            }
          )
        }
      }
    );
  }

  goToAddStudent(courseId: any){
    // this.router.navigate([`editCourse/${courseId}`]);
  }

}
