import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-tab',
  templateUrl: './users-tab.component.html',
  styleUrls: ['./users-tab.component.css']
})
export class UsersTabComponent implements OnInit {
teachersTab: any= [];
studentsTab: any= [];
parentsTab: any= [];

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (response) => {
        this.teachersTab = response.users.filter((elem: any)=> elem.role === "teacher");
        this.studentsTab = response.users.filter((elem: any)=> elem.role === "student");
        this.parentsTab = response.users.filter((elem: any)=> elem.role === "parent");
      } 
    )
  }

  deleteUser(id: any){
    this.userService.deleteUser(id).subscribe(
      (data) => {
        console.log("Here response Delete Course from BE", data.isDeleted);
        if (data.isDeleted) {
          this.userService.getAllUsers().subscribe(
            (response) => {
              this.teachersTab = response.users.filter((elem: any)=> elem.role === "teacher");
              this.studentsTab = response.users.filter((elem: any)=> elem.role === "student");
              this.parentsTab = response.users.filter((elem: any)=> elem.role === "parent");
            } 
          )
        }
      }
    );
  }

}
