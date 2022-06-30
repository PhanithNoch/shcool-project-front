import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import Swal from 'sweetalert2';
import {TokenService} from '../../shared/services/token.service';
import {error} from 'protractor';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  lstHealth: any = [];
  students: any;
  health: any = {
    health_desc:'test',
    doctor_name:'test',
    payer_name: 'test',
    bring_nane:'test',
    student_id: 1
  };

  constructor(private http: HttpClient, private router: Router,private  tokenService:TokenService) {
  }

  ngOnInit(): void {
    this.getHealth();
  }


  getHealth() {
    const token = this.tokenService.get();
    const header = new HttpHeaders().set(
      'Authorization',
      'Bearer' + token
    );

    this.http.get(environment.baseUrl + 'students', {headers: header})
      .subscribe((res: any) => {
          this.students = res.data;
          console.log('student', this.students);

        },
        error => {
          Swal.fire(
            'The Internet?',
            error.message,
            'error'
          );
        }
      );
  }




}
