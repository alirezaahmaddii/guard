import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {PhysioRoutingModule} from "./physio-routing.module";
import {PhysioComponent} from "../home/physio.component";

@NgModule({
  declarations: [
    PhysioComponent
  ],
  //for module
  imports: [
    CommonModule,
    FormsModule,
    PhysioRoutingModule,
  ],
  providers: [],
})
export class PhysioModule {}
