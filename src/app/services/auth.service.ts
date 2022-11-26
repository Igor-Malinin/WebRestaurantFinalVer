import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthTokens} from "../entity/AuthTokens";

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
              private router: Router
  ) {
  }

  login() {
    this.isAuth = true
    this.router.navigate(['/restaurants'])
  }

  logout() {
    this.isAuth = false
    setTimeout(() => {
      this.router.navigate(['/'])
      // window.location.reload()
    }, 200)
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
