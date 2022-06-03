import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post-admin-upsert',
  templateUrl: './post-admin-upsert.component.html',
  styleUrls: ['./post-admin-upsert.component.css'],
})
export class PostAdminUpsertComponent implements OnInit {
  isUpdate: boolean = false;
  postId:any;
  post: any = {
    title: '',
    body: '',
    user_id: '',
    image_url: '',
  };
  constructor(
    private http: HttpClient,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPostById();
  }
  getPostById() {
    this.activateRoute.params.subscribe((param) => {
      console.log('id', param);
      if (param.id) {
        this.isUpdate = true;
        this.postId = param.id;
        this.http
          .get(environment.baseUrl + 'post/' + param.id)
          .subscribe((res: any) => {
            console.log('res', res);
            this.post = res.data;
          });
      }
    });
  }
  updatePost(){
    let userInfo = JSON.parse(localStorage.getItem('user_info'));
    this.post.user_id = userInfo.id;

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!'
    }).then((result) => {
      if (result.isConfirmed) {

    this.http.put(environment.baseUrl + 'post/' + this.postId,this.post)
    .subscribe(res=>{
      console.log(res);
    },
    (erorr)=>{
      console.log(erorr)
    }
    );
        Swal.fire(
          'Updated!',
          'Your file has been updated.',
          'success'
        )
      }
    })
    

  }
  createPost() {
    let userInfo = JSON.parse(localStorage.getItem('user_info'));
    this.post.user_id = userInfo.id;
    if (this.post) {
      this.http
        .post(environment.baseUrl + 'post', this.post)
        .subscribe((res:any) => {

          console.log('response', res);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: res.message,
            showConfirmButton: false,
            timer: 1500
          })
          this.post = {};
        },
        (error) => {
          console.log(error);
        }
        
        );
    }
    console.log('post', this.post);
  }
}
