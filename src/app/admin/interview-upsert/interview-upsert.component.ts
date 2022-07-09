import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {TokenService} from '../../shared/services/token.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-interview-upsert',
  templateUrl: './interview-upsert.component.html',
  styleUrls: ['./interview-upsert.component.css']
})
export class InterviewUpsertComponent implements OnInit {
  public  interview: any = {};
  constructor(private http: HttpClient, private router: Router, private tokenService: TokenService,private _location: Location) {
  }
  ngOnInit(): void {
  }
  backClicked() {
    this._location.back();
  }
  onSubmit(): void {
    const token = this.tokenService.get();
    const header = new HttpHeaders().set(
      'Authorization',
      'Bearer' + token
    );
    this.http.post(environment.baseUrl + 'interview', this.interview, {headers: header}).subscribe({
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
