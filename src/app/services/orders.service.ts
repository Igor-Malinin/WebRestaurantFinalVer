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
  ordersCourierActive: any[] = [
    {id: 0, restaurant: 'Русская кухня', user: new User(), needDelivery: false, orderedTime: new Date(), seatNumber: 2, isDone: 'Готовится', address: 'Моссковское шоссе, 34Б, 109', price: '12390'},
    {id: 1, restaurant: 'Грузинская кухня', user: new User(), needDelivery: false, orderedTime: new Date(), seatNumber: 4, isDone: 'Доставляется', address: 'Ново-садовая, 105, 23', price: '10540'},
    {id: 2, restaurant: 'Японская кухня', user: new User(), needDelivery: false, orderedTime: new Date(), seatNumber: 7, isDone: 'Доставляется', address: 'Гагарина, 48, 34', price: '5890'},
    {id: 3, restaurant: 'Китайская кухня', user: new User(), needDelivery: false, orderedTime: new Date(), seatNumber: 8, isDone: 'Доставляется', address: 'Севастопольская, 37, 15', price: '21190'},
  ]
  ordersCourierDone: any[] = [
    {id: 0, restaurant: 'Русская кухня', user: new User(), needDelivery: false, orderedTime: new Date(), seatNumber: 2, isDone: 'Доставлен', address: 'Ставропольская, 12, 19', price: '4990'},
    {id: 1, restaurant: 'Грузинская кухня', user: new User(), needDelivery: false, orderedTime: new Date(), seatNumber: 4, isDone: 'Отменен', address: 'Кирова, 15, 33', price: '7650'},
    {id: 2, restaurant: 'Японская кухня', user: new User(), needDelivery: false, orderedTime: new Date(), seatNumber: 7, isDone: 'Доставлен', address: 'Металистов, 47, 3', price: '6520'},
    {id: 3, restaurant: 'Китайская кухня', user: new User(), needDelivery: false, orderedTime: new Date(), seatNumber: 8, isDone: 'Доставлен', address: 'Севастопольская, 28, 10', price: '1090'},
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
