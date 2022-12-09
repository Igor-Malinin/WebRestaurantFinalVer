import { Injectable } from '@angular/core';
import {Order} from "../entity/Order";
import {OrderHall} from "../entity/OrderHall";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  orders: Order[] = [
    {id: 0, number: 1, restaurantId: 0, telephone: 9231213273, address: 'улица доставки', restaurantName: 'Русская кухня', date: `${this.padTo2Digits(new Date().getDate())}.${this.padTo2Digits(new Date().getMonth())}.${String(new Date().getFullYear())} / ${String(new Date().getHours())}:${String(new Date().getMinutes())}`, price: 12000, status: 'готовится'},
    {id: 1, number: 2, restaurantId: 0, telephone: 9231213273, address: 'улица доставки', restaurantName: 'Русская кухня', date: `${this.padTo2Digits(new Date().getDate())}.${this.padTo2Digits(new Date().getMonth())}.${String(new Date().getFullYear())} / ${String(new Date().getHours())}:${String(new Date().getMinutes())}`, price: 24000, status: 'доставляется'},
    {id: 2, number: 3, restaurantId: 1, telephone: 9231213273, address: 'улица доставки', restaurantName: 'Американская кухня', date: `${this.padTo2Digits(new Date().getDate())}.${this.padTo2Digits(new Date().getMonth())}.${String(new Date().getFullYear())} / ${String(new Date().getHours())}:${String(new Date().getMinutes())}`, price: 30500, status: 'обрабатывается'},
    {id: 3, number: 4, restaurantId: 1, telephone: 9231213273, address: 'улица доставки', restaurantName: 'Американская кухня', date: `${this.padTo2Digits(new Date().getDate())}.${this.padTo2Digits(new Date().getMonth())}.${String(new Date().getFullYear())} / ${String(new Date().getHours())}:${String(new Date().getMinutes())}`, price: 5700, status: 'доставлен'},
  ]

  ordersHall: OrderHall[] = [
    {id: 0, number: 1, restaurantId: 0, telephone: 9231213273, amountOfPlaces: 8, table: 9, restaurantName: 'Русская кухня', date: `${this.padTo2Digits(new Date().getDate())}.${this.padTo2Digits(new Date().getMonth())}.${String(new Date().getFullYear())} / ${String(new Date().getHours())}:${String(new Date().getMinutes())}`, price: 12000, status: 'готовится'},
    {id: 1, number: 2, restaurantId: 0, telephone: 9231213273, amountOfPlaces: 2, table: 4, restaurantName: 'Русская кухня', date: `${this.padTo2Digits(new Date().getDate())}.${this.padTo2Digits(new Date().getMonth())}.${String(new Date().getFullYear())} / ${String(new Date().getHours())}:${String(new Date().getMinutes())}`, price: 24000, status: 'готов'},
    {id: 2, number: 3, restaurantId: 1, telephone: 9231213273, amountOfPlaces: 4, table: 13, restaurantName: 'Американская кухня', date: `${this.padTo2Digits(new Date().getDate())}.${this.padTo2Digits(new Date().getMonth())}.${String(new Date().getFullYear())} / ${String(new Date().getHours())}:${String(new Date().getMinutes())}`, price: 30500, status: 'обрабатывается'},
    {id: 3, number: 4, restaurantId: 1, telephone: 9231213273, amountOfPlaces: 16, table: 6, restaurantName: 'Американская кухня', date: `${this.padTo2Digits(new Date().getDate())}.${this.padTo2Digits(new Date().getMonth())}.${String(new Date().getFullYear())} / ${String(new Date().getHours())}:${String(new Date().getMinutes())}`, price: 5700, status: 'готов'},
  ]

  constructor() {
  }

  padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }
}
