import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import Swal from 'sweetalert2';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-health-upsert',
  templateUrl: './health-upsert.component.html',
  styleUrls: ['./health-upsert.component.css']
})
export class HealthUpsertComponent implements OnInit {
  health:any;
  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.getHealth();
  }


  getHealth() {
    this.http.get(environment.baseUrl + 'students')
      .subscribe((res: any) => {
          this.health = res.data;
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
