import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WebsiteHomeComponent} from './website/website-home/website-home.component';
import {FooterComponent} from './website/footer/footer.component';
import {NavbarComponent} from './website/navbar/navbar.component';
import {UserComponent} from './admin/user/user.component';
import {SidebarComponent} from './admin/sidebar/sidebar.component';
import {PostDetailComponent} from './admin/post-detail/post-detail.component';
import {PostUpsertComponent} from './admin/post-detail/post-upsert/post-upsert.component';
import {HomeAdminComponent} from './admin/home-admin/home-admin.component';
import {LoginComponent} from './admin/login/login.component';
import {SignupComponent} from './admin/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ContactComponent } from './website/contact/contact.component';
import { AboutComponent } from './website/about/about.component';
import { PostComponent } from './website/post/post.component';
import { PostAdminComponent } from './admin/post-admin/post-admin.component';
import { PostAdminUpsertComponent } from './admin/post-admin-upsert/post-admin-upsert.component';
import { ProductComponent } from './product/product.component';
import { ProductUpsertComponent } from './product-upsert/product-upsert.component';
import { FileUploadModule } from 'ng2-file-upload';
import { AfterLoginService } from './shared/services/after-login.service';
import { TokenService } from './shared/services/token.service';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDocumentComponent } from './student-document/student-document.component';
import { StudentUpsertComponent } from './student-upsert/student-upsert.component';

@NgModule({
  declarations: [
    AppComponent,
    WebsiteHomeComponent,
    FooterComponent,
    NavbarComponent,
    PostComponent,
    UserComponent,
    SidebarComponent,
    PostDetailComponent,
    PostUpsertComponent,
    HomeAdminComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    AboutComponent,
    PostAdminComponent,
    PostAdminUpsertComponent,
    ProductComponent,
    ProductUpsertComponent,
    StudentListComponent,
    StudentDocumentComponent,
    StudentUpsertComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FileUploadModule
  ],
  providers: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
