import {Component} from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'patient-root',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent {
  constructor(private _location: Location) {
  }
  public logOut() {
    this._location.back();
    localStorage.removeItem("token_angular");
  }
}
