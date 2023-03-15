import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class PhysioService {
  private loginPhysio:boolean = false;

  public isPhysio() {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(this.loginPhysio);
      }, 1000)
    })
  }
}
