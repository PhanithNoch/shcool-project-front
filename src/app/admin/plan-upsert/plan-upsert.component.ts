import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {TokenService} from '../../shared/services/token.service';
import Swal from 'sweetalert2';
import {Location} from '@angular/common';

@Component({
  selector: 'app-plan-upsert',
  templateUrl: './plan-upsert.component.html',
  styleUrls: ['./plan-upsert.component.css']
})
export class PlanUpsertComponent implements OnInit {
  studentId: string;
  currentStudent: any = {};
  plan: any = {
    student_id: 2,
    date: null,
    review_date: null,
    student_family: null,
    student_dream: null,
    student_review: null,
    requirement_activity: null
  };
  studentPlan: any = [];

  constructor(private http: HttpClient, private activateRoute: ActivatedRoute, private tokenService: TokenService, private _location: Location) {
  }


  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(res => {
      this.studentId = res.id;
      this.getPlan();

    });
  }

  getPlan(): void {
    this.http.get(environment.baseUrl + 'auth/getPlanWhere/' + this.studentId).subscribe({
      next: (response: any) => {
        console.log(response);
        // this.student = response.data;
        this.studentPlan = response.data;
      },
      error: (error) => console.log(error),
    });

  }



  onSubmit(): void {
    const token = this.tokenService.get();
    const header = new HttpHeaders().set(
      'Authorization',
      'Bearer' + token
    );
    this.plan.student_id = this.studentId;
    this.http.post(environment.baseUrl + 'auth/plan', this.plan, {headers: header}).subscribe({
      next: (response) => {
        Swal.fire(
          'The Internet?',
          'Created Successfully',
          'success'
        );
        this.backClicked();
        console.log(response);
      },
      error: (error) => {
        Swal.fire(
          'The Internet?',
          error.message,
          'error'
        );
        console.log(error);
      }

    });
  }
}
