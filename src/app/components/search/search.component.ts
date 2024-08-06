import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  user: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  searchTeacher() {
    console.log("Here Search teacher Object", this.user);
    
   }

}
