import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthTokens} from "../entity/AuthTokens";
import {CookieService} from "ngx-cookie-service";

const API_URL: string = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authTokens: AuthTokens = new AuthTokens()
  private isAuth = false
  username = ''
  password = ''
  private erStatus: number = 0;

  constructor(private http: HttpClient,
              private router: Router,
              private cookieService: CookieService
  ) {
  }

  // login(username: string) {
  //   if (username != 'Admin' && username != 'Manager')
  //     username = 'Client'
  //   this.cookieService.set('name','Restaurant');
  //   this.cookieService.set('isAuthenticated', 'OK')
  //   this.cookieService.set('userName', 'Igor')
  //   this.cookieService.set('role', username)
  //   this.setAuth(true)
  //   this.router.navigate(['/restaurants'])
  //   setTimeout(() => {
  //     window.location.reload()
  //   }, 300)
  //   return this.getIsAuth()
  // }

  login(username: any, password: string) {
    const params = {
      'username': username,
      'password': password
    }

    console.log(params)

    this.http.post(
      API_URL + '/api/login', null, {
        params: params,
        responseType: 'text' as 'json',
        observe: 'response'
      }
    ).subscribe({
      next: (msg) => {
        console.log(msg)
        console.log(JSON.parse(String(msg.body)))
        let role: string = JSON.parse(String(msg.body)).user.role.roleName

        this.authTokens = {
          access_token: JSON.parse(String(msg.body)).access_token,
          refresh_token: JSON.parse(String(msg.body)).refresh_token
        }

        this.cookieService.set('name','restUser');
        this.cookieService.set('access_token', JSON.parse(String(msg.body)).access_token, {expires: 1})
        this.cookieService.set('refresh_token', JSON.parse(String(msg.body)).refresh_token, {expires: 1})
        this.cookieService.set('isAuthenticated', msg.statusText)
        this.cookieService.set('id', JSON.parse(String(msg.body)).user.id)
        this.cookieService.set('surname', JSON.parse(String(msg.body)).user.surname)
        this.cookieService.set('name', JSON.parse(String(msg.body)).user.name)
        // this.cookieService.set('patronymic', JSON.parse(String(msg.body)).user.patronymic)
        this.cookieService.set('telephone', this.username)
        this.cookieService.set('role', role)
        console.log('cookieservice: ', this.cookieService)
        this.isAuth = (msg.statusText == 'OK')
        return 'OK'
      },
      error: (err) => {
        this.isAuth = false
        console.log('error received:', err)
        if (err.status == 403) {
          this.erStatus = 403
        }
        else {
          this.erStatus = 404
        }
      },
      complete: () => {
        this.router.navigate(['/restaurants'])
        setTimeout(() => {
          window.location.reload()
        }, 10)
      }
    })
  }

  logout() {
    this.cookieService.delete('dishes')
    this.cookieService.delete('drinks')
    setTimeout(() => {
      this.cookieService.deleteAll('/')
    }, 200)

    this.isAuth = false
    setTimeout(() => {
      this.router.navigate(['/'])
    }, 300)
    setTimeout(() => {
      window.location.reload()
    }, 400)
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

  setAuthTokens(accessToken: string, refreshToken: string) {
    this.authTokens = {
      access_token:  accessToken,
      refresh_token: refreshToken
    }
  }

  getAuthTokens () {
    return this.authTokens
  }

  getErrStatus() {
    return this.erStatus
  }

}
