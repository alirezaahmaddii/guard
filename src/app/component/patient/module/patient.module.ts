import {NgModule} from "@angular/core";
import {PatientComponent} from "../home/patient.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {PatientRoutingModule} from "./patient-routing.module";


@NgModule({
  declarations:[
    PatientComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PatientRoutingModule
  ],
  providers:[],
})
export class PatientModule {}

//regex
