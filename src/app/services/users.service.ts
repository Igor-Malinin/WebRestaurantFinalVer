import { Injectable } from '@angular/core';
import {User} from "../entity/User";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthTokens} from "../entity/AuthTokens";
import {CookieService} from "ngx-cookie-service";

const API_URL: string = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  authTokens: AuthTokens = {
    access_token: this.cookieService.get('access_token'),
    refresh_token: this.cookieService.get('refresh_token')
  }

  users: User[] = [
    {id: 1, surname: 'Малинин', name: 'Игорь', telephone: 9608223422, address: 'Мой адрес, мой дом, моя квартира', myOrders: '', role: {id: 0, roleName: 'admin'}, password: 'vip16108', latitude: 0, longitude: 0, placeOfWork: '', working: false},
    {id: 2, surname: 'Маратов', name: 'Серик', telephone: 9998983211, address: 'Мой адрес, мой дом, моя квартира', myOrders: '', role: {id: 0, roleName: 'courier'}, password: '12930123', latitude: 0, longitude: 0, placeOfWork: '', working: false},
    {id: 3, surname: 'Геккель', name: 'Виктория', telephone: 9273331118, address: 'Мой адрес, мой дом, моя квартира', myOrders: '', role: {id: 0, roleName: 'manager'}, password: '13223344', latitude: 0, longitude: 0, placeOfWork: '', working: false},
    {id: 4, surname: 'Тестов', name: 'Тест', telephone: 9094044030, address: 'Мой адрес, мой дом, моя квартира', myOrders: '', role: {id: 0, roleName: 'client'}, password: 'testtest', latitude: 0, longitude: 0, placeOfWork: '', working: false},
  ]

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  deleteUser(id: number) {
    // delete this.users[this.users.indexOf((this.users.filter(user => user.id == id))[0], 0)]
    this.users = this.users.filter(user => user !== this.users.filter(user => user.id == id)[0]);
    console.log(this.users)
  }
  addUser(user: User) {
    this.users.push(user)
  }

  signupUserByAdmin(user: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authTokens.access_token
    })
    console.log(this.authTokens.access_token)
    console.log(JSON.stringify(user))
    return this.http.post(API_URL + '/api/registration', JSON.stringify(user), {headers: headers, responseType: 'text' as 'json', observe: 'response'})
  }

  signupUser(user: User) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    //   'Authorization': 'Bearer ' + this.authTokens.access_token
    })

    return this.http.post(API_URL + '/test/registration', JSON.stringify(user), {headers: headers})
  }

  getRoles() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authTokens.access_token
    })

    return this.http.get(API_URL + '/api/getRoles', {headers: headers, responseType: 'text' as 'json', observe: 'response'});
  }

  getUsers() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authTokens.access_token
    })

    return this.http.get(API_URL + '/test/users', {headers: headers, responseType: 'text' as 'json', observe: 'response'});
  }
}
