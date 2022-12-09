import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../services/orders.service";
import {MenuService} from "../services/menu.service";
import {PaymentsService} from "../services/payments.service";
import {CookieService} from "ngx-cookie-service";
import {FormBuilder, Validators} from "@angular/forms";

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
  formCreateOrder: any
  telephoneLength: number = 10
  checkedH: boolean[] = []
  checkedD: boolean[] = []

  constructor(
    private ordersService: OrdersService,
    private paymentsService: PaymentsService,
    private menuService: MenuService,
    private cookieService: CookieService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.role = this.cookieService.get('role')
    this.formCreateOrder = this.fb.group({
      id: [null],
      number: [null, Validators.required],
      hallOrDev: ['', Validators.required],
      amountOfPlaces: ['', Validators.required],
      table: ['', Validators.required],
      telephoneNumber: [null,[
        Validators.required,
        Validators.minLength(this.telephoneLength),
        Validators.maxLength(this.telephoneLength)
      ]],
      address: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      status: ['', Validators.required]
    })
    this.checkedH.length = this.ordersService.orders.length
    this.checkedD.length = this.ordersService.orders.length
    this.checkedH.fill(true)
    this.checkedD.fill(false)
  }

  getOrdersDelivery() {
    return this.ordersService.orders
  }

  getOrdersHall() {
    return this.ordersService.ordersHall
  }

  getDishes() {
    return this.menuService.dishes
  }

  getDrinks() {
    return this.menuService.drinks
  }

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

  submit() {
    if(this.formCreateOrder.valid) {
      const newUserData = {...this.formCreateOrder.value}
      newUserData.telephoneNumber = Number(newUserData.telephoneNumber)
      console.log(newUserData)
      this.formCreateOrder.reset()
    }
  }
}
