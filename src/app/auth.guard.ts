import { Injectable } from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from "@angular/router";
import { Observable } from "rxjs";
import { PhysioService } from "./physio.service";
interface IDataUser {
  id: number,
  exp: number,
  firstname: string,
  iat: number,
  email: string,
  lastname: string,
  username: string,
  role: {
    name: string,
    id: number,
  },
}
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private token:string | null ="";
  // @ts-ignore
  private user:IDataUser | null = {};
  constructor(private physioService: PhysioService, private router:Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.physioService.isPhysio().then(() => {
      this.token = localStorage.getItem("token_angular");
      // @ts-ignore
      this.user = JSON.parse(atob(this.token.split(".")[1]));
      if(this.user?.role.name === "physo"){
        return true;
      }else if(this.user?.role.name === "patient") {
        return true
      }else{
        this.router.navigate(['/login/auth'])
        return false;
      }
    });
  }
}
