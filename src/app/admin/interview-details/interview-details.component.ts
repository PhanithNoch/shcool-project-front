import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import Swal from 'sweetalert2';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-interview-details',
  templateUrl: './interview-details.component.html',
  styleUrls: ['./interview-details.component.css']
})
export class InterviewDetailsComponent implements OnInit {
  public interview: any = {};
  public loading = false;
  constructor(private http: HttpClient, private router: Router, private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((res => {
      if (res.id != null) {
        this.getInterview(res.id);
      }

    }));
  }
  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }

  getInterview(id: any): void {
    this.http.get(environment.baseUrl + 'interview/' + id)
      .subscribe((res: any) => {
          this.interview = res.data;
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
}
