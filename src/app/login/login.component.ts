import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {CookieService} from "ngx-cookie-service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isAuthenticated: boolean = false
  roles: string[] = ['Admin', 'Manager', 'Courier', 'Client']
  username: string = ''
  password: string = '';

  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    if (this.cookieService.check('isAuthenticated')) {
      this.isAuthenticated = (this.cookieService.get('isAuthenticated') == 'OK')
    }
    console.log(this.username)
  }

  onLoginClick() {
    this.isAuthenticated = this.authService.login(this.username)
  }
}
