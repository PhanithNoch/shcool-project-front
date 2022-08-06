import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {TokenService} from '../../shared/services/token.service';
import {Location} from '@angular/common';
import {environment} from '../../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accidents-upsert',
  templateUrl: './accidents-upsert.component.html',
  styleUrls: ['./accidents-upsert.component.css']
})
export class AccidentsUpsertComponent implements OnInit {


  public  text:any;
  constructor(private http: HttpClient, private activateRoute: ActivatedRoute, private tokenService: TokenService, private _location: Location) {
  }

  ngOnInit(): void {
  }
  getEditorInstance(event){
    console.log(event);
  }
  onSubmit() :void {
    const token = this.tokenService.get();
    const header = new HttpHeaders().set(
      'Authorization',
      'Bearer' + token
    );
    let accident = {
      'desc':this.text,
      'student_id':1
    };
    this.http.post(environment.baseUrl + 'auth/accident', accident,{headers:header}).subscribe(
      {
        complete(): void {
          Swal.fire(
            'Message',
            'ការបង្កើតទទួលបានជោគជ័យ',
            'success'
          );
        },

        next: (response) => console.log(response),
        error: (error) => {
          console.log( error.error[0]);
          Swal.fire(
            'Message',
            error.error[0][0].toString,
            'error'
          );
          console.log(error);
        }
      });
  }


}
