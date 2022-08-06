import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import Swal from 'sweetalert2';
import {TokenService} from '../../shared/services/token.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public loading = false;
  searchTerm = '';
  term = '';
  public students: any;
  public currentStudents: any;
  public user: any;
  public studentID: any;
  public payment: any
    = {};
  public paymentHistory: any
    = {};
  angForm: FormGroup;

  printPage() {
    window.print();
  }

  constructor(private http: HttpClient, private router: Router, private userService: TokenService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm(): void {
    this.angForm = this.fb.group({
      total: ['', Validators.required],
      amount: ['', Validators.required],
      note: []
    });
  }

  ngOnInit(): void {
    this.loading = true;
    this.getStudentPayment();
    this.getUser();

  }

  getUser(): void {
    this.user = this.userService.getUserInfo();
  }

  getStudentPayment(): void {
    this.http.get(environment.baseUrl + 'payments')
      .subscribe((res: any) => {
          this.students = res.data;
          console.log('paymentHistory', this.students);
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

  rowClick(id): void {
    // this.router.navigate(['/admin/student-upsert', id]);
  }

  deletePayment(id: any): void {
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
        this.http.delete(environment.baseUrl + 'payments/' + id)
          .subscribe((res: any) => {
              console.log(res);
              // this.getAllPosts();
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

  selectedRow(id: any, currentStudents: any): void {
    this.studentID = id;
    this.currentStudents = currentStudents;
    console.log('currentStudents', this.currentStudents);
    console.log('ID', this.studentID);
  }

  updatePaidStatus(): void {
    this.http
      .put(environment.baseUrl + 'students/' + this.studentID, {
        unpaid: false

      })
      .subscribe((res: any) => {
          console.log('response', res);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  createPayment(): void {
    console.log('student id ',this.studentID);

    this.payment.user_id = this.user.id;
    this.payment.student_id = this.studentID;
    console.log('user id', this.user.id);
    if (this.angForm.valid) {
      console.log('payment', this.payment);
      this.http
        .post(environment.baseUrl + 'payments', this.payment)
        .subscribe((res: any) => {
            this.updatePaidStatus();
            this.getStudentPayment();
            console.log('response', res);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: res.message,
              showConfirmButton: false,
              timer: 1500
            });
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      console.log('message error');
    }
  }


}
