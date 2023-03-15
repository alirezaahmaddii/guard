import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../login.component";
const routes: Routes = [
  { path: "auth", component: LoginComponent, canActivate: []},
  { path: "", redirectTo: '/login', pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule { }
