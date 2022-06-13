import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  public students:any;

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.getStudents();
  }



  getStudents(){
    this.http.get(environment.baseUrl + 'auth/students')
    .subscribe((res:any)=>{
this.students = res.data;
    },
    error => {
      Swal.fire(
        'The Internet?',
        error.message,
        'error'
      )
    }
    );
  }

}
