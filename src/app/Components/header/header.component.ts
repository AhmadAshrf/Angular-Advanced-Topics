import { UserAuthenticationService } from './../../Services/user-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isUserLogged:boolean = false
  constructor(private _authService:UserAuthenticationService) { }

  ngOnInit(): void {
    // this.isUserLogged = this._authService.isUserLoggedIn
    this._authService.isUserLoggedInSubject().subscribe(status => {
      this.isUserLogged = status
    })
  }

}
