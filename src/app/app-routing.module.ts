import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { TdfLoginComponent } from './tdf-login/tdf-login.component';
import { TdfComponent } from './tdf/tdf.component';
import { UsersComponent } from './users/users.component';
import { WithDiscountComponent } from './with-discount/with-discount.component';
import { WithoutDiscountComponent } from './without-discount/without-discount.component';

const routes: Routes = [
  {path:'',component:ProductsComponent},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'users',component:UsersComponent},
  {path:'posts',component:PostsComponent},
  {path:'tdf',component:TdfComponent},
  {path:'tdfLogin',component:TdfLoginComponent},
  {path:'withDiscount',component:WithDiscountComponent},
  {path:'withoutDiscount',component:WithoutDiscountComponent},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
