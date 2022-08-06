import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accident',
  templateUrl: './accident.component.html',
  styleUrls: ['./accident.component.css']
})



export class AccidentComponent implements OnInit {
  public students: any;
  typeSelected: string;
  public loading = false;
  public searchTerm = '';
  public term = '';

  constructor(private http: HttpClient, private router: Router) {
    this.typeSelected = 'ball-fussion';
  }

  ngOnInit(): void {
    this.loading = true;

    this.getStudents();
  }


  getStudents() {

    this.http.get(environment.baseUrl + 'students')
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
