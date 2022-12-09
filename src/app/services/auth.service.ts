import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthTokens} from "../entity/AuthTokens";
import {CookieService} from "ngx-cookie-service";

const API_URL: string = 'http://51.250.54.62:8080'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authTokens!: AuthTokens
  private isAuth = false
  username = ''
  password = ''

  constructor(private http: HttpClient,
              private router: Router,
              private cookieService: CookieService
  ) {
  }

  login(username: string) {
    if (username != 'Admin')
      username = 'Client'
    this.cookieService.set('name','Restaurant');
    this.cookieService.set('isAuthenticated', 'OK')
    this.cookieService.set('userName', 'Igor')
    this.cookieService.set('role', username)
    this.setAuth(true)
    this.router.navigate(['/restaurants'])
    setTimeout(() => {
      window.location.reload()
    }, 300)
    return this.getIsAuth()
  }

  logout() {
    this.cookieService.deleteAll('/')
    this.isAuth = false
    setTimeout(() => {
      this.router.navigate(['/'])
    }, 200)
    setTimeout(() => {
      window.location.reload()
    }, 300)
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.isAuth)
      }, 300)
    })
  }

  getIsAuth () {
    return this.isAuth
  }
  setAuth (status: boolean) {
    this.isAuth = status
  }
  getAuthTokens () {
    return this.authTokens
  }

}
