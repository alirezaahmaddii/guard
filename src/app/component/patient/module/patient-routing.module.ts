import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientComponent} from "../home/patient.component";
const routes: Routes = [
  { path: "home_page", component: PatientComponent, canActivate: []},
  { path: "", redirectTo: '/patient/home_page', pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule { }
