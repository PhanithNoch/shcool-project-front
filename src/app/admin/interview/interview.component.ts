import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import Swal from 'sweetalert2';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {
  searchTerm = '';
  term = '';
  public students: any;
  typeSelected: string;
  public loading = false;

  constructor(private http: HttpClient, private router: Router) {
    this.typeSelected = 'ball-fussion';
  }

  ngOnInit(): void {
    this.loading = true;

    this.getStudents();
  }

  getStudents() {

    this.http.get(environment.baseUrl + 'interview')
      .subscribe((res: any) => {
          this.students = res.data;
          setTimeout(() => {
            this.loading = false;
          }, 700);
        },
        error => {
          setTimeout(() => {
            this.loading = false;
          }, 700);
          Swal.fire(
            'The Internet?',
            error.message,
            'error'
          );
        }
      );
  }

}
