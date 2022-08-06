import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WebsiteHomeComponent} from './website/website-home/website-home.component';
import {HomeAdminComponent} from './admin/home-admin/home-admin.component';
import {LoginComponent} from './admin/login/login.component';
import {SignupComponent} from './admin/signup/signup.component';
import {BeforeLoginService} from './shared/services/before-login.service';
import {AfterLoginService} from './shared/services/after-login.service';
import {ContactComponent} from './website/contact/contact.component';
import {AboutComponent} from './website/about/about.component';
import {PostComponent} from './website/post/post.component';
import {PostAdminComponent} from './admin/post-admin/post-admin.component';
import {UserComponent} from './admin/user/user.component';
import {PostAdminUpsertComponent} from './admin/post-admin-upsert/post-admin-upsert.component';
import {ProductComponent} from './product/product.component';
import {ProductUpsertComponent} from './admin/product-upsert/product-upsert.component';
import {StudentListComponent} from './admin/student-list/student-list.component';
import {StudentDocumentComponent} from './admin/student-document/student-document.component';
import {StudentUpsertComponent} from './admin/student-upsert/student-upsert.component';
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
import {HealthDetailsComponent} from './admin/health-details/health-details.component';
import {GreetingsDetailsComponent} from './admin/greetings-details/greetings-details.component';
import {BudgetDetailsComponent} from './admin/budget-details/budget-details.component';
import {PlanDetailsComponent} from './admin/plan-details/plan-details.component';
import {InterviewDetailsComponent} from './admin/interview-details/interview-details.component';
import {AccidentComponent} from './admin/accident/accident.component';
import {AccidentDetailsComponent} from './admin/accident-details/accident-details.component';
import {TestimoniesComponent} from './admin/testimonies/testimonies.component';
import {TestimoniesDetailsComponent} from './admin/testimonies-details/testimonies-details.component';
import {AccidentsUpsertComponent} from './admin/accidents-upsert/accidents-upsert.component';
import {TestimoniesUpsertComponent} from './admin/testimonies-upsert/testimonies-upsert.component';
import {TestimonyViewComponent} from './admin/testimony-view/testimony-view.component';
import {AccidentViewComponent} from './admin/accident-view/accident-view.component';

const routes: Routes = [
  // {path: '', component: WebsiteHomeComponent},
  {
    path: '', redirectTo: '/admin/student-list', pathMatch: 'full'
  },
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
        path: 'user', component: UserComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'upsert', component: PostAdminUpsertComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'upsert/:id', component: PostAdminUpsertComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'student-list', component: StudentListComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'student-upsert', component: StudentUpsertComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'student-upsert/:id', component: StudentUpsertComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'student-document', component: StudentDocumentComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'payments', component: PaymentComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'payments-upsert/:id', component: PaymentUpsertComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'plans', component: PlanComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'plans-details/:id', component: PlanDetailsComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'plans-upsert/:id', component: PlanUpsertComponent, canActivate: [AfterLoginService],
      },

      {
        path: 'administration', component: AdministrationComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'administration/:id', component: AdministrationUpsertComponent, canActivate: [AfterLoginService],
      },

      {
        path: 'interview', component: InterviewComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'interview-upsert', component: InterviewUpsertComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'interview-upsert/:id', component: InterviewUpsertComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'interview-details/:id', component: InterviewDetailsComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'health', component: HealthComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'health-details/:id', component: HealthDetailsComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'health-upsert/:id', component: HealthUpsertComponent, canActivate: [AfterLoginService],
      },

      {
        path: 'greetings', component: GreetingsComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'greetings-details/:id', component: GreetingsDetailsComponent, canActivate: [AfterLoginService],
      },

      {
        path: 'budgetlist', component: BudgetlistComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'budget-details/:id', component: BudgetDetailsComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'accidents', component: AccidentComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'accidents-details/:id', component: AccidentDetailsComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'accidents-upsert/:id', component: AccidentsUpsertComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'accidents-view/:id', component: AccidentViewComponent, canActivate: [AfterLoginService],
      },


      {
        path: 'testimonies', component: TestimoniesComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'testimonies-details/:id', component: TestimoniesDetailsComponent, canActivate: [AfterLoginService],
      },

      {
        path: 'testimonies-upsert/:id', component: TestimoniesUpsertComponent, canActivate: [AfterLoginService],
      },
      {
        path: 'testimonies-view/:id', component: TestimonyViewComponent, canActivate: [AfterLoginService],
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
