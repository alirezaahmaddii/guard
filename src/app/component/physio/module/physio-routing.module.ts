import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhysioComponent} from "../home/physio.component";
import {AuthGuard} from "../../../auth.guard";

const routes: Routes = [
  {path: "home_page", component: PhysioComponent, canActivate:[ AuthGuard ]},
  { path: "", redirectTo: "/physio/home_page", pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhysioRoutingModule {}
