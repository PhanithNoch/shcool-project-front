import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenService} from '../../shared/services/token.service';
import {environment} from '../../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  public students: any;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.getStudents();
  }


  getStudents() {
    this.http.get(environment.baseUrl + 'students')
      .subscribe((res: any) => {
          this.students = res.data;
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

  deleteStudent(id: any): void{
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

}
