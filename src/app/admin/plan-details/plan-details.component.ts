import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.css']
})
export class PlanDetailsComponent implements OnInit {
  public studentId;
  public studentPlan;
public  currentStudent:any;
  constructor(private http: HttpClient, private activateRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.activateRoute.params.subscribe(res => {
      this.studentId = res.id;
      this.getPlan();
      this.show();
    });
  }

  show(): void {
    this.http.get(environment.baseUrl + 'auth/plan/' + this.studentId).subscribe({
      next: (response: any) => {
        console.log('response', response);
        this.currentStudent = response.data;
      },
      error: (error) => console.log(error),
    });
  }

  getPlan(): void {
    this.http.get(environment.baseUrl + 'auth/getPlanWhere/' + this.studentId).subscribe({
      next: (response: any) => {
        console.log(response);
        // this.student = response.data;
        this.studentPlan = response.data;
        console.log(this.studentPlan);
      },
      error: (error) => console.log(error),
    });

  }

}
