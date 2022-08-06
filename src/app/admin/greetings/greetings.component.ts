import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {TokenService} from '../../shared/services/token.service';
import {environment} from '../../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {
  students: any;
  public loading = false;
  searchTerm = '';
  term = '';
  constructor(private http: HttpClient, private router: Router, private  tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.getStudent();
  }


  getStudent(): void {
    const token = this.tokenService.get();
    const header = new HttpHeaders().set(
      'Authorization',
      'Bearer' + token
    );

    this.http.get(environment.baseUrl + 'students', {headers: header})
      .subscribe((res: any) => {
          this.students = res.data;
          console.log('student', this.students);
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
  onSubmit(){

  }



}
