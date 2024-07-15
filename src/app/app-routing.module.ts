import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:"addProduct", component:CreateComponent},
  {path:"home", component:HomeComponent},
  {path:"updateProduct", component:UpdateComponent},
  {path:"detailProduct", component:DetailComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
