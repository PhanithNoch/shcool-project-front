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

  public students: any;
  public currentStudents: any;
  public user: any;
  public studentID: any;
  public  payment: any
    = {};
  public  paymentHistory: any
    = {};
  angForm: FormGroup;

  constructor(private http: HttpClient, private router: Router, private userService: TokenService, private fb: FormBuilder) {
    this.createForm();
  }
  mytodos = [
    {
      item:'need to buy movie tickets',
      isCompleted:false
    },
    {
      item:'Gardening tomorrow 9:00AM',
      isCompleted:false
    },
    {
      item:'Car Washing',
      isCompleted:true
    },
    {
      item:'Buy a pen',
      isCompleted:false
    }
  ];
  createForm() {
    this.angForm = this.fb.group({
      total: ['', Validators.required ],
      amount: ['', Validators.required ],
      note: []
    });
  }
  ngOnInit(): void {
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

  rowClick(id) {
    // this.router.navigate(['/admin/student-upsert', id]);
  }

  deletePayment(id: any) {
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
    console.log('currentStudents',this.currentStudents);
    console.log('ID', this.studentID);
  }


  createPayment() {
    this.payment.user_id = this.user.id;
    this.payment.student_id = this.studentID;
    console.log('user id',  this.user.id);
    if (this.angForm.valid) {
      console.log('payment', this.payment);
      this.http
        .post(environment.baseUrl + 'payments', this.payment)
        .subscribe((res: any ) => {
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
    }
    else{
      console.log('message error');
    }
  }


}
