import { Component, EventEmitter, OnInit } from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { DomSanitizer } from '@angular/platform-browser';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Products } from '../shared/models/product_model';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-upsert',
  templateUrl: './product-upsert.component.html',
  styleUrls: ['./product-upsert.component.css'],
})
export class ProductUpsertComponent implements OnInit {
  public previewPath: any;
  public imageURL:string;
  public file: File;
  private id:string;
  form: FormGroup;
  public product: Products;
  constructor(
    private sanitizer: DomSanitizer,
    private http: HttpClient,
    private route:ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.form =    this.fb.group({
      name: new FormControl(null, [
        Validators.required,
      
      ]),
      price: new FormControl(null, [
        Validators.required,
      
      ]),
      barcode: new FormControl(null, [
        Validators.required,
      
      ]),
      desc: new FormControl(),
      image: new FormControl(),
    });
    
    this.uploader.onAfterAddingFile = (fileItem) => {
      this.previewPath = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(fileItem._file)));
    }
  }
  get validator() {
    const validator = this.form.get('control').validator({} as AbstractControl);
    console.log(validator);
    if (validator && validator.required) {
      return true;
    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    if(this.id){
      this.getProductyID(this.id);
    }


        


  }
  getProductyID(id:string){
    this.http.get(environment.baseUrl + 'products/' + id)
    .subscribe((res:any)=>{
      console.log(res);
      this.product = res.data;
      console.log('produuct ',this.product);
      this.imageURL =environment.showImage + this.product.image;
      this.form.setValue({
        name: this.product.name,
        price: this.product.price,
        barcode: this.product.barcode ,
        desc: this.product.desc,
        image:this.product.image 
    });
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
  public uploader: FileUploader = new FileUploader({
    disableMultipart: false,
    autoUpload: true,
    method: 'post',
    itemAlias: 'attachment',
    allowedFileType: ['image', 'pdf'],
  });

  public onFileSelected(event: EventEmitter<File[]>) {
    const reader = new FileReader();

    this.file = event[0];
    reader.onload = () => {
      this.previewPath = reader.result as string;
      console.log(this.previewPath);

    }
  }
  submitForm() {
    if(this.form.valid){
      var formData: any = new FormData();
      formData.append('name', this.form.get('name').value);
      formData.append('barcode', this.form.get('barcode').value);
      formData.append('price', this.form.get('price').value);
      formData.append('desc', this.form.get('price').value);
      formData.append('image', this.file);
      console.log(this.form.get('image').value);
      if(this.id != null){
        this.product.name = this.form.get('name').value;
        this.product.desc = this.form.get('desc').value;
        this.product.price = this.form.get('price').value;
        this.product.barcode = this.form.get('barcode').value;

        this.http.put(environment.baseUrl + 'products/'+this.id, this.product).subscribe({
          next: (response) => console.log(response),
          error: (error) => console.log(error),
        });
      }
      else{
        this.http.post(environment.baseUrl + 'products', formData).subscribe({
          next: (response) => console.log(response),
          error: (error) => console.log(error),
        });
      }

   
      
    }else{
      Swal.fire(
        'Message',
      
        'សូមប្រាកដថាអ្នកបានបញ្ចូលទិន្នន័យបានត្រឹមត្រូវ'
      )
    }

  }
}
