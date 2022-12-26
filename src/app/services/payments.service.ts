import { Injectable } from '@angular/core';
import {Payment} from "../entity/Payment";

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  payment: Payment[] = [
    {id: 0, date: String(new Date()), isDone: false, price: 12000},
    {id: 1, date: String(new Date()), isDone: false, price: 12000},
    {id: 2, date: String(new Date()), isDone: false, price: 12000},
    {id: 3, date: String(new Date()), isDone: false, price: 12000},
  ]

  constructor() { }


}
