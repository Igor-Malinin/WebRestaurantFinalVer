import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../services/orders.service";
import {MenuService} from "../services/menu.service";
import {PaymentsService} from "../services/payments.service";
import {CookieService} from "ngx-cookie-service";
import {FormBuilder, Validators} from "@angular/forms";
import {Dish} from "../entity/Dish";
import {Drink} from "../entity/Drink";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  role: string = ''
  toggleInfo: boolean = false
  ordersToggle: boolean = true
  createOrdrTggl: boolean = false
  formCreateOrderHall: any
  formCreateOrderDeliv: any
  telephoneLength: number = 10
  checkedH: boolean[] = []
  checkedD: boolean[] = []
  dishesCategories: string[] = []
  drinksCategories: string[] = []
  currentDishes: Dish[] = []
  sortedDishes: Dish[] = []
  currentDrinks: Drink[] = []
  sortedDrinks: Drink[] = []
  amount: number[] = []

  constructor(
    private ordersService: OrdersService,
    private paymentsService: PaymentsService,
    private menuService: MenuService,
    private cookieService: CookieService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.role = this.cookieService.get('role')
    this.formCreateOrderHall = this.fb.group({
      id: [null],
      number: [null],
      fio: ['', Validators.required],
      telephone: ['', [
        Validators.required,
        Validators.minLength(this.telephoneLength),
        Validators.maxLength(this.telephoneLength)
      ]],
      date: ['', Validators.required],
      timeStart: ['', Validators.required],
      amountOfPlaces: ['', Validators.required],
      table: ['', Validators.required],
      restaurantName: ['', Validators.required],
      status: ['', Validators.required],
      dishes: [''],
      comment: ['']
    })

    this.formCreateOrderDeliv = this.fb.group({
      id: [null],
      number: [null, Validators.required],
      fio: ['', Validators.required],
      telephone: [null,[
        Validators.required,
        Validators.minLength(this.telephoneLength),
        Validators.maxLength(this.telephoneLength)
      ]],
      address: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      restaurantName: ['', Validators.required],
      status: ['', Validators.required],
      dishes: ['', Validators.required],
      comment: ['']
    })
    this.checkedH.length = this.ordersService.orders.length
    this.checkedD.length = this.ordersService.orders.length
    this.checkedH.fill(true)
    this.checkedD.fill(false)
    // this.currentDishes = this.menuService.dishes.filter((menuId, index) => {
    //   return 1 == this.menuService.dishes[index].menu_id
    // })
    // this.currentDrinks = this.menuService.drinks.filter((menuId, index) => {
    //   return 1 == this.menuService.drinks[index].menu_id
    // })
    this.sortedDishes = this.currentDishes
    this.sortedDrinks = this.currentDrinks
    this.dishesCategories.push(this.currentDishes[0]?.category)
    this.drinksCategories.push(this.currentDrinks[0]?.category)
    this.amount.length = this.currentDishes.length + this.currentDrinks.length
    this.amount.fill(0)
  }

  getOrdersDelivery() {
    return this.ordersService.orders
  }

  getOrdersHall() {
    return this.ordersService.ordersHall
  }

  // getDishes() {
  //   return this.menuService.dishes
  // }
  //
  // getDrinks() {
  //   return this.menuService.drinks
  // }

  getPayment(index: number) {
    return this.paymentsService.payment[index]
  }

  // check(elem: any) {
  //   let id = elem.id;
  //   if(id=='delivery') {
  //     ('#hall').removeAttr("checked");
  //   }
  //   if(id=='ucheb') {
  //     ('#delivery').removeAttr("checked");
  //   }
  // }

  dishCategories() {
    this.currentDishes.map(category => {
      if(!this.dishesCategories.includes(category.category))
        this.dishesCategories.push(category.category)
    })
    return this.dishesCategories
  }
  drinkCategories() {
    this.currentDrinks.map(category => {
      if(!this.drinksCategories.includes(category.category))
        this.drinksCategories.push(category.category)
    })
    return this.drinksCategories
  }

  sortDishes(cat: string) {
    this.sortedDishes = this.currentDishes.filter((category, index) => category.category === cat)
  }
  sortDrinks(cat: string) {
    this.sortedDrinks = this.currentDrinks.filter((category, index) => category.category === cat)
  }

  // incValDish(i: number) {
  //   this.sortedDishes[i].amount++
  // }
  // incValDrink(i: number) {
  //   this.sortedDrinks[i].amount++
  // }
  //
  // decValDish(i: number) {
  //   this.sortedDishes[i].amount--
  // }
  // decValDrink(i: number) {
  //   this.sortedDrinks[i].amount--
  // }

  submit() {
    if(this.formCreateOrderHall.valid) {
      const newUserData = {...this.formCreateOrderHall.value}
      newUserData.telephoneNumber = Number(newUserData.telephoneNumber)
      console.log(newUserData)
      this.formCreateOrderHall.reset()
    }
    if(this.formCreateOrderDeliv.valid) {
      const newUserData = {...this.formCreateOrderDeliv.value}
      newUserData.telephoneNumber = Number(newUserData.telephoneNumber)
      console.log(newUserData)
      this.formCreateOrderDeliv.reset()
    }
  }
}
