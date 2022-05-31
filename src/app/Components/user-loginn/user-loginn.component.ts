import { UserAuthenticationService } from './../../Services/user-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-loginn',
  templateUrl: './user-loginn.component.html',
  styleUrls: ['./user-loginn.component.scss']
})
export class UserLoginnComponent implements OnInit {

  isUserLogged:boolean = false

  constructor(private _authService:UserAuthenticationService) { }

  ngOnInit(): void {
    this.isUserLogged = this._authService.isUserLoggedIn
  }

  login(){
    this._authService.login('userName', 'Password')
    this.isUserLogged = this._authService.isUserLoggedIn

  }

  logout(){
    this._authService.logout()
    this.isUserLogged = this._authService.isUserLoggedIn

  }

}
