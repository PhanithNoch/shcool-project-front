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
import { ProductUpsertComponent } from './product-upsert/product-upsert.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDocumentComponent } from './student-document/student-document.component';
import { StudentUpsertComponent } from './student-upsert/student-upsert.component';

const routes: Routes = [
  {path: '', component: WebsiteHomeComponent},
  {path:'post',component:PostComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},

  {
    path: 'login', component: LoginComponent, canActivate: [BeforeLoginService]
  },
  {
    path: 'signup', component: SignupComponent, canActivate: [BeforeLoginService]
  },

  {
    path: 'admin', component: HomeAdminComponent, canActivate: [AfterLoginService],
    children: [
      {
        path: '', redirectTo: 'post', pathMatch: 'full'
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
