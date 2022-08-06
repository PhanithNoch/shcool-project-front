import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import Swal from 'sweetalert2';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenService} from '../../shared/services/token.service';

@Component({
  selector: 'app-testimony-view',
  templateUrl: './testimony-view.component.html',
  styleUrls: ['./testimony-view.component.css']
})
export class TestimonyViewComponent implements OnInit {
  public desc:any;
  constructor(private http: HttpClient, private router: Router, private tokenService: TokenService, private activateRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.activateRoute.params.subscribe((res => {
      if (res.id != null) {
        this.show(res.id);
      }

    }));
  }

  show(id)
  {
    this.http.get(environment.baseUrl + 'auth/testimony/' + id)
      .subscribe((res: any) => {
          this.desc = res.data.desc;
          setTimeout(() => {
          }, 700);
        },
        error => {
          setTimeout(() => {
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
