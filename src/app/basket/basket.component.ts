import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {Dish} from "../entity/Dish";
import {Drink} from "../entity/Drink";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  role: string
  dishesBasket: Dish[] = []
  drinksBasket: Drink[] = []

  constructor(
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.role = this.cookieService.get('role')
    if (this.cookieService.get('dishes')) {
      this.dishesBasket = JSON.parse(this.cookieService.get('dishes'))
    }
    if (this.cookieService.get('drinks')) {
      this.drinksBasket = JSON.parse(this.cookieService.get('drinks'))
    }
    // console.log(this.dishesBasket)
    // console.log(this.drinksBasket)
  }

  getDishes() {
    return this.dishesBasket
  }
  getDrinks() {
    return this.drinksBasket
  }

  deleteDish(i: any) {
    this.dishesBasket = this.dishesBasket.filter(((dish, index) => index != i))
    this.cookieService.set('dishes', JSON.stringify(this.dishesBasket))
    setTimeout(() => {
      window.location.reload()
    }, 400)
  }
  deleteDrink(i: any) {
    this.drinksBasket = this.drinksBasket.filter(((drink, index) => index != i))
    this.cookieService.set('drinks', JSON.stringify(this.drinksBasket))
    setTimeout(() => {
      window.location.reload()
    }, 400)
  }

  getTotal() {
    let totalCost = 0
    if (this.cookieService.get('dishes')) {
      totalCost += JSON.parse(this.cookieService.get('dishes'))
        .map((cost: Dish) => {
          return cost.price
        })
        .reduce((currentSum: number, currentNumber: number) => {
          return currentSum + currentNumber
        }, 0)
    }
    if (this.cookieService.get('drinks')) {
      totalCost += JSON.parse(this.cookieService.get('drinks'))
        .map((cost: Drink) => {
          return cost.price
        })
        .reduce((currentSum: number, currentNumber: number) => {
          return currentSum + currentNumber
        }, 0)
    }
    return totalCost
  }
}
