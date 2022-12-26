import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-checkout-order',
  templateUrl: './checkout-order.component.html',
  styleUrls: ['./checkout-order.component.scss']
})
export class CheckoutOrderComponent implements OnInit {

  hallDelToggle: boolean = true
  formCheckoutOrderHall: any
  formCheckoutOrderDelivery: any
  telephoneLength: number = 10
  hallSchemeToggle: boolean = false;
  checkedFaster: boolean = true;
  checkedTime: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.formCheckoutOrderHall = this.fb.group({
      id: [null],
      number: [null],
      fio: [[this.cookieService.get('surname'), this.cookieService.get('name')], Validators.required],
      telephoneNumber: [9608223422,[
        Validators.required,
        Validators.minLength(this.telephoneLength),
        Validators.maxLength(this.telephoneLength)
      ]],
      date: ['', Validators.required],
      timeStart: ['', Validators.required],
      amountOfPlaces: ['', Validators.required],
      table: ['', Validators.required],
      status: [''],
      comment: ['']
    })

    this.formCheckoutOrderDelivery = this.fb.group({
      id: [null],
      number: [null, Validators.required],
      fio: ['', Validators.required],
      telephoneNumber: [null,[
        Validators.required,
        Validators.minLength(this.telephoneLength),
        Validators.maxLength(this.telephoneLength)
      ]],
      address: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      status: ['', Validators.required],
      comment: ['']
    })

  }



  submit() {
    const checkoutInfo1 = {...this.formCheckoutOrderHall.value}
    const checkoutInfo2 = {...this.formCheckoutOrderHall.value}
    console.log(checkoutInfo1)
    console.log(checkoutInfo2)
    this.router.navigate(['/orders'])
  }

}
