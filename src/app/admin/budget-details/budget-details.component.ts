import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {TokenService} from '../../shared/services/token.service';
import {environment} from '../../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-budget-details',
  templateUrl: './budget-details.component.html',
  styleUrls: ['./budget-details.component.css']
})
export class BudgetDetailsComponent implements OnInit {
  public  isInputIncome = false;
  public budgets: any;
  public budget: any = {
    income: null,
    pay: null,
    balance: null,
    buy: null,
    student_id: 1
  };

  constructor(private http: HttpClient, private router: Router, private tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.getStudents();
  }


  getStudents(): void {
    this.http.get(environment.baseUrl + 'auth/student_payment_income')
      .subscribe((res: any) => {
          this.budgets = res.data;
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

  deleteStudent(id: any): void {
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
        this.http.delete(environment.baseUrl + 'students/' + id)
          .subscribe((res: any) => {
              console.log(res);
              this.getStudents();
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

  // rowClick(id){
  //   this.router.navigate(['/admin/student-upsert',id])
  // }
  onSubmit(): void {
    const token = this.tokenService.get();
    const header = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    // return;
    // this.greeting.student_id = Number(this.id);
    this.http.post(environment.baseUrl + 'auth/student_payment_income', this.budget, {headers: header})
      .subscribe((res: any) => {
          // this.lstHealth = this.students.health;
          Swal.fire(
            'The Internet',
            'Created Successfully',
            'success'
          );
          this.getStudents();


          this.budget = {};
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
  hideModal() : void {
    const elem = document.getElementById('submitBtn');

    const evt = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });

    elem.dispatchEvent(evt);
  }
}
