import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenService} from '../../shared/services/token.service';
import {environment} from '../../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-testimonies-details',
  templateUrl: './testimonies-details.component.html',
  styleUrls: ['./testimonies-details.component.css']
})
export class TestimoniesDetailsComponent implements OnInit {

  testimonies: any;
  studentObj: any;
  id: string;
  health: any = {
    health_desc: null,
    doctor_name: null,
    payer_name: null,
    bring_nane: null,
    student_id: 1
  };

  constructor(private http: HttpClient, private router: Router, private tokenService: TokenService, private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((res => {
      if (res.id != null) {
        this.id = res.id;
        this.getHealthWhere(res.id);
      }

    }));
  }

  getHealthWhere(id: any): void {
    const token = this.tokenService.get();
    const header = new HttpHeaders().set(
      'Authorization',
      'Bearer' + token
    );

    this.http.get(environment.baseUrl + 'auth/testimony-where/' + id, {headers: header})
      .subscribe((res: any) => {
          this.testimonies = res.data;
          this.studentObj = res.student;
          console.log('student', this.testimonies);
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

  delete(id: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        );
        this.http.delete(environment.baseUrl + 'auth/healths/' + id)
          .subscribe((res: any) => {
              console.log(this.id);
              this.getHealthWhere(this.id);
            },
            error => console.log(error)
          );
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        );
      }
    });
  }

  onSubmit(): void {
    const token = this.tokenService.get();
    const header = new HttpHeaders().set(
      'Authorization',
      'Bearer' + token
    );
    this.health.student_id = this.id;
    console.log('health', this.health);
    this.http.post(environment.baseUrl + 'auth/healths', this.health, {headers: header})
      .subscribe((res: any) => {
          this.testimonies = res.data;
          this.getHealthWhere(this.id);
          // this.lstHealth = this.students.health;
          Swal.fire(
            'The Internet?',
            'Created Successfully',
            'success'
          );
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

  onEdit(health: any) {
    console.log('heath', health);
    // this.health.health_desc = health.health_desc;
    // this.health.payer_name = health.payer_name;
  }

}
