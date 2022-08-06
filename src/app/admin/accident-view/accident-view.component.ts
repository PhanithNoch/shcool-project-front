import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import Swal from 'sweetalert2';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-accident-view',
  templateUrl: './accident-view.component.html',
  styleUrls: ['./accident-view.component.css']
})
export class AccidentViewComponent implements OnInit {
  public desc:any;
  constructor(private http: HttpClient, private router: Router,private  activateRoute:ActivatedRoute) {
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
    this.http.get(environment.baseUrl + 'auth/accident/' + id)
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
