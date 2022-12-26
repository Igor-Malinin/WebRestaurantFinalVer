import { Injectable } from '@angular/core';
import {Order} from "../entity/Order";
import {OrderHall} from "../entity/OrderHall";
import {Restaurant} from "../entity/Restaurant";
import {User} from "../entity/User";
import {TableInRestaurant} from "../entity/TableInRestaurant";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthTokens} from "../entity/AuthTokens";
import {CookieService} from "ngx-cookie-service";

const API_URL: string = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  authTokens: AuthTokens = {
    access_token: this.cookieService.get('access_token'),
    refresh_token: this.cookieService.get('refresh_token')
  }

  orders: Order[] = [
    {id: 0, restaurant: 'Русская кухня', user: new User(), needDelivery: false, orderedTime: new Date(), seatNumber: 2, isDone: 'Готовится', dishes: '', drinks: ''},
    {id: 1, restaurant: 'Грузинская кухня', user: new User(), needDelivery: false, orderedTime: new Date(), seatNumber: 4, isDone: 'Доставляется', dishes: '', drinks: ''},
    {id: 2, restaurant: 'Японская кухня', user: new User(), needDelivery: false, orderedTime: new Date(), seatNumber: 7, isDone: 'Доставлен', dishes: '', drinks: ''},
    {id: 3, restaurant: 'Китайская кухня', user: new User(), needDelivery: false, orderedTime: new Date(), seatNumber: 8, isDone: 'Обрабатывается', dishes: '', drinks: ''},
  ]
  ordersHall: Order[] = [
    {id: 0, restaurant: 'Русская кухня', user: new User(), needDelivery: false, orderedTime: new Date(), seatNumber: 2, isDone: 'Готовится', dishes: '', drinks: ''},
    {id: 1, restaurant: 'Грузинская кухня', user: new User(), needDelivery: false, orderedTime: new Date(), seatNumber: 4, isDone: 'Принят', dishes: '', drinks: ''},
    {id: 2, restaurant: 'Японская кухня', user: new User(), needDelivery: false, orderedTime: new Date(), seatNumber: 7, isDone: 'Обрабатывается', dishes: '', drinks: ''},
    {id: 3, restaurant: 'Китайская кухня', user: new User(), needDelivery: false, orderedTime: new Date(), seatNumber: 8, isDone: 'Готов', dishes: '', drinks: ''},
  ]


  constructor(
    private cookieService: CookieService,
    private http: HttpClient
  ) {
  }

  padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  addOrder(order: Order) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authTokens.access_token
    })

    return this.http.post(API_URL + '/test/addOrder', JSON.stringify(order), {headers: headers})
  }
}
