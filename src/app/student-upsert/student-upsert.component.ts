import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-upsert',
  templateUrl: './student-upsert.component.html',
  styleUrls: ['./student-upsert.component.css']
})
export class StudentUpsertComponent implements OnInit {

  public student = {};
  constructor() { }

  ngOnInit(): void {
  }

}
