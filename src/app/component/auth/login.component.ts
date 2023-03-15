import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public age:number = 0;
  public data = {
    email :"admin@demo.com",
    password :"123456",
  }
  public response:object = {};
  constructor(private http:HttpClient, private router:Router) {
  }
  public join() {
    throw  this.http.post('https://api.hemscap.com/v1/api/physo/auth/login', this.data).subscribe((res)=> {
      this.response = res;
      // @ts-ignore
      localStorage.setItem("token_angular", this.response.data.token);
      this.router.navigate(["/physio"]);
    })
  }
  public joinPatient() {
    throw  this.http.post('https://api.hemscap.com/v1/api/patient/auth/login', this.data).subscribe((res)=> {
      this.response = res;
      // @ts-ignore
      localStorage.setItem("token_angular", this.response.data.token);
      this.router.navigate(["/patient"]);
    })
  }
}
