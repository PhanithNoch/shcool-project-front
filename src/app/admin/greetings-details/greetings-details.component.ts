import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenService} from '../../shared/services/token.service';
import {environment} from '../../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-greetings-details',
  templateUrl: './greetings-details.component.html',
  styleUrls: ['./greetings-details.component.css']
})
export class GreetingsDetailsComponent implements OnInit {

  students: any;
  id: string;
  visit: any = {};
  public  greeting = {
    visitor_name: null,
    phone: null,
    relationship: null,
    time_in: null,
    time_out: null,
    note: null,
    student_id: 1
  };

  // tslint:disable-next-line:max-line-length
  constructor(private http: HttpClient, private router: Router, private tokenService: TokenService, private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((res => {
      if (res.id != null) {
        this.id = res.id;
        this.getGreetings(res.id);
      }

    }));
  }

  getGreetings(id: any): void {
    const token = this.tokenService.get();
    const header = new HttpHeaders().set(
      'Authorization',
      'Bearer' + token
    );

    this.http.get(environment.baseUrl + 'auth/greetings_where/' + id, {headers: header})
      .subscribe((res: any) => {
          this.visit = res.data;
          console.log('greetings', this.visit);
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
        this.http.delete(environment.baseUrl + 'auth/greetings/' + id)
          .subscribe((res: any) => {
              console.log(this.id);
              this.getGreetings(this.id);
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
      'Bearer ' + token
    );
    console.log('greeting', this.greeting);
    // return;
    this.greeting.student_id = Number(this.id);
    console.log('health', this.visit);
    this.http.post(environment.baseUrl + 'auth/greetings', this.greeting, {headers: header})
      .subscribe((res: any) => {
          this.students = res.data;
          this.getGreetings(this.id);
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
