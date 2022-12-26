import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isAuthenticated: boolean = false
  errorToggle: boolean = false
  roles: string[] = ['Admin', 'Manager', 'Courier', 'Client']
  username: string = ''
  password: string = '';
  private erStatus: number = 0;

  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.cookieService.check('isAuthenticated')) {
      this.isAuthenticated = (this.cookieService.get('isAuthenticated') == 'OK')
    }
  }

  onLoginClick() {
    if (this.username != '' && this.password != '') {
      // this.isAuthenticated = this.authService.login(this.username)
      this.authService.login(this.username, this.password)
      this.errorToggle = false
    }
    else
      this.errorToggle = true
  }
}
