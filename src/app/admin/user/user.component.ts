import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { TokenService } from 'src/app/shared/services/token.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  lstUsers = [];


  constructor(private http:HttpClient,private tokenService:TokenService) { 
  
  }

  ngOnInit(): void {
    this.getAllUsers();
  }


  getAllUsers(){
    let header = new HttpHeaders().set(
      "Authorization",
     "Bearer"+ this.tokenService.get()
    );

    this.http.get(environment.baseUrl + 'auth/users',{headers:header})
    .subscribe((res:any)=>{
      // console.log(res);
      this.lstUsers = res.data.data;
    },
    error => {
      Swal.fire(
        'The Internet?',
        error.message,
        'error'
      )
    }
    );
  }

}
