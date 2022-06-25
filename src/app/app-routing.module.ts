import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WebsiteHomeComponent} from './website/website-home/website-home.component';
import {HomeAdminComponent} from './admin/home-admin/home-admin.component';
import {LoginComponent} from './admin/login/login.component';
import {SignupComponent} from './admin/signup/signup.component';
import {BeforeLoginService} from './shared/services/before-login.service';
import {AfterLoginService} from './shared/services/after-login.service';
import { ContactComponent } from './website/contact/contact.component';
import { AboutComponent } from './website/about/about.component';
import { PostComponent } from './website/post/post.component';
import { PostAdminComponent } from './admin/post-admin/post-admin.component';
import { UserComponent } from './admin/user/user.component';
import { PostAdminUpsertComponent } from './admin/post-admin-upsert/post-admin-upsert.component';
import { ProductComponent } from './product/product.component';
import { ProductUpsertComponent } from './admin/product-upsert/product-upsert.component';
import { StudentListComponent } from './admin/student-list/student-list.component';
import { StudentDocumentComponent } from './admin/student-document/student-document.component';
import { StudentUpsertComponent } from './admin/student-upsert/student-upsert.component';
import {PaymentComponent} from './admin/payment/payment.component';
import {PaymentUpsertComponent} from './admin/payment-upsert/payment-upsert.component';
import {PlanComponent} from './admin/plan/plan.component';
import {PlanUpsertComponent} from './admin/plan-upsert/plan-upsert.component';
import {AdministrationComponent} from './admin/administration/administration.component';
import {AdministrationUpsertComponent} from './admin/administration-upsert/administration-upsert.component';
import {InterviewComponent} from './admin/interview/interview.component';
import {InterviewUpsertComponent} from './admin/interview-upsert/interview-upsert.component';
import {HealthComponent} from './admin/health/health.component';
import {HealthUpsertComponent} from './admin/health-upsert/health-upsert.component';
import {GreetingsComponent} from './admin/greetings/greetings.component';
import {BudgetlistComponent} from './admin/budgetlist/budgetlist.component';

const routes: Routes = [
  {path: '', component: WebsiteHomeComponent},
  {path: 'post', component: PostComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},

  {
    path: 'login', component: LoginComponent, canActivate: [BeforeLoginService]
  },
  {
    path: 'signup', component: SignupComponent, canActivate: [BeforeLoginService]
  },

  {
    path: 'admin', component: HomeAdminComponent, canActivate: [AfterLoginService],
    // path: 'admin', component: HomeAdminComponent,
    children: [
      {
        path: '', redirectTo: 'student-list', pathMatch: 'full'
      },
      {
        path: 'post', component: PostAdminComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'user', component: UserComponent,
      },
      {
        path: 'upsert', component: PostAdminUpsertComponent,
      },
      {
        path: 'upsert/:id', component: PostAdminUpsertComponent,
      },
  {
        path: 'student-list', component: StudentListComponent,
      },
      {
        path: 'student-upsert', component: StudentUpsertComponent,
      },
      {
        path: 'student-upsert/:id', component: StudentUpsertComponent,
      },
      {
        path: 'student-document', component: StudentDocumentComponent,
      },
      {
        path: 'payments', component: PaymentComponent,
      },
      {
        path: 'payments-upsert/:id', component: PaymentUpsertComponent,
      },
      {
        path: 'plans', component: PlanComponent,
      },
      {
        path: 'plans-upsert/:id', component: PlanUpsertComponent
      },

      {
        path: 'administration', component: AdministrationComponent
      },
      {
        path: 'administration/:id', component: AdministrationUpsertComponent
      },

      {
        path: 'interview', component: InterviewComponent
      },
      {
        path: 'interview-upsert', component: InterviewUpsertComponent
      },
      {
        path: 'interview-upsert/:id', component: InterviewUpsertComponent
      },
      {
        path: 'health', component: HealthComponent
      },
      {
        path: 'health-upsert/:id', component: HealthUpsertComponent
      },

      {
        path: 'greetings', component: GreetingsComponent
      },

      {
        path: 'budgetlist', component: BudgetlistComponent
      },

      // {
      //   path: 'product', component: ProductComponent,
      // },
      // {
      //   path: 'product/:id', component: ProductComponent,
      // },
      // {
      //   path: 'product-upsert', component: ProductUpsertComponent,
      // },
      // {
      //   path: 'product-upsert/:id', component: ProductUpsertComponent,
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
