import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../services/orders.service";

@Component({
  selector: 'app-courier-orders',
  templateUrl: './courier-orders.component.html',
  styleUrls: ['./courier-orders.component.scss']
})
export class CourierOrdersComponent implements OnInit {

  constructor(
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {
  }

  getOrders() {
    return this.ordersService.ordersCourierActive
  }

}
