import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  private isLoggedSubject:BehaviorSubject<boolean>
  constructor() { 
    this.isLoggedSubject = new BehaviorSubject<boolean>(this.isUserLoggedIn)
  }


  login(userName:string, password:string){
    let token = '156554651'
    localStorage.setItem('token',token)
    this.isLoggedSubject.next(true)
  }

  logout(){
    localStorage.removeItem('token')
    this.isLoggedSubject.next(false)

  }

  get isUserLoggedIn():boolean{
    return (localStorage.getItem('token'))? true : false      
  }

  isUserLoggedInSubject(){
    return this.isLoggedSubject.asObservable()
  }
}
