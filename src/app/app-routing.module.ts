import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "/login/auth", pathMatch: "full" },
  {path: "physio", loadChildren: () => import('./component/physio/module/physio.module').then(m => m.PhysioModule)},
  {path: "patient", loadChildren: () => import('./component/patient/module/patient.module').then(m => m.PatientModule)},
  {path: "login", loadChildren: () => import('./component/auth/module/login.module').then(m => m.LoginModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
