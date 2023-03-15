import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'physio-component',
  templateUrl: './physio.component.html',
  styleUrls: ['./physio.component.scss']
})
export class PhysioComponent implements OnInit{
  constructor(private _location: Location) {}
  ngOnInit() {}
public logOut() {
  this._location.back();
  localStorage.removeItem("token_angular");

}
}
