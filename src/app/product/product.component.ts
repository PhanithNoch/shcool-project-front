import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Products } from '../shared/models/product_model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 public products: Array<Products>;
 id:any;

  lstPosts = [];
  constructor(
    private http:HttpClient,
    private router:Router,

  ) { }

  ngOnInit(): void {

    this.getAllProducts();
  }

  getAllProducts(){
    this.http.get(environment.baseUrl + 'products')
    .subscribe((res:any)=>{
      console.log(res);
      this.products = res.data.data;
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

  gotoEdit(id:any){
    this.router.navigate(['admin/upsert',id]);
  }
  deletePost(id:any){
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
        )
        this.http.delete(environment.baseUrl + 'products/' + id)
        .subscribe((res:Products)=>{
          console.log(res);
          this.getAllProducts();
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
        )
      }
    })
}
}
