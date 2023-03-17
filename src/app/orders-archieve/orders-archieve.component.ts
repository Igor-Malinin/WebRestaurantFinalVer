import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../services/orders.service";

@Component({
  selector: 'app-orders-archieve',
  templateUrl: './orders-archieve.component.html',
  styleUrls: ['./orders-archieve.component.scss']
})
export class OrdersArchieveComponent implements OnInit {

  constructor(
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {
  }

  getOrders() {
    return this.ordersService.ordersCourierDone
  }

}
