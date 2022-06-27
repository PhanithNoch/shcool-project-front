import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-upsert',
  templateUrl: './student-upsert.component.html',
  styleUrls: ['./student-upsert.component.css']
})
export class StudentUpsertComponent implements OnInit {
form: NgForm;
  public student: any = {};
  constructor(private http: HttpClient,private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((res =>{
      if(res.id != null){
        this.getStudent(res.id);
      }

    }));
    console.log('activateRoute',);
  }

  onSubmit(f: NgForm) {
    console.log('student,',f.value.sex);
    console.log('criminals_with,', f.value.criminals_with);
    console.log(f.value.fullname);  // { first: '', last: '' }
    console.log(f.valid);  // false
    this.http.post(environment.baseUrl + 'students',f.value).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  chooseSex(e){
    console.log(e);
  }

  getStudent(id:string){
    this.http.get(environment.baseUrl + 'students/' + id)
    .subscribe((res:any)=>{
      console.log(res);
      this.student = res.data;


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
