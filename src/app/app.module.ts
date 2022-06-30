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
import { ProductUpsertComponent } from './admin/product-upsert/product-upsert.component';
import { FileUploadModule } from 'ng2-file-upload';
import { AfterLoginService } from './shared/services/after-login.service';
import { TokenService } from './shared/services/token.service';
import { StudentListComponent } from './admin/student-list/student-list.component';
import { StudentDocumentComponent } from './admin/student-document/student-document.component';
import { PaymentComponent } from './admin/payment/payment.component';
import { HealthComponent } from './admin/health/health.component';
import { AdministrationComponent } from './admin/administration/administration.component';
import { PlanComponent } from './admin/plan/plan.component';
import { InterviewComponent } from './admin/interview/interview.component';
import { PaymentUpsertComponent } from './admin/payment-upsert/payment-upsert.component';
import { PlanUpsertComponent } from './admin/plan-upsert/plan-upsert.component';
import { AdministrationUpsertComponent } from './admin/administration-upsert/administration-upsert.component';
import { InterviewUpsertComponent } from './admin/interview-upsert/interview-upsert.component';
import { BudgetlistComponent } from './admin/budgetlist/budgetlist.component';
import {StudentUpsertComponent} from './admin/student-upsert/student-upsert.component';
import {GreetingsComponent} from './admin/greetings/greetings.component';
import {HealthUpsertComponent} from './admin/health-upsert/health-upsert.component';
import { PrintReceiptComponent } from './admin/print-receipt/print-receipt.component';
import {NgxPrintModule} from 'ngx-print';
import { HealthDetailsComponent } from './admin/health-details/health-details.component';
import { GreetingsDetailsComponent } from './admin/greetings-details/greetings-details.component';


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
    PaymentComponent,
    HealthComponent,
    AdministrationComponent,
    PlanComponent,
    InterviewComponent,
    PaymentUpsertComponent,
    PlanUpsertComponent,
    AdministrationUpsertComponent,
    InterviewUpsertComponent,
    HealthUpsertComponent,
    GreetingsComponent,
    BudgetlistComponent,
    PrintReceiptComponent,
    HealthDetailsComponent,
    GreetingsDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FileUploadModule,
    NgxPrintModule
  ],
  providers: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
