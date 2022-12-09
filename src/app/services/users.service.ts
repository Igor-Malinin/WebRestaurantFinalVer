import { Injectable } from '@angular/core';
import {User} from "../entity/User";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [
    {id: 1, surname: 'Малинин', name: 'Игорь', patronymic: 'Игоревич', telephoneNumber: 9608223422, address: 'Мой адрес, мой дом, моя квартира', role: 'Admin', email: 'igorswayts@gmail.com', login: 't_soni', password: 'vip16108'},
    {id: 2, surname: 'Маратов', name: 'Серик', patronymic: 'Маратович', telephoneNumber: 9998983211, address: 'Мой адрес, мой дом, моя квартира', role: 'Courier', email: 'ssau@gmail.com', login: 'serik', password: '12930123'},
    {id: 3, surname: 'Геккель', name: 'Виктория', patronymic: 'Отчество', telephoneNumber: 9273331118, address: 'Мой адрес, мой дом, моя квартира', role: 'Manager', email: 'gekkel@gmail.com', login: 'vika', password: '13223344'},
    {id: 4, surname: 'Тестов', name: 'Тест', patronymic: 'Тестович', telephoneNumber: 9094044030, address: 'Мой адрес, мой дом, моя квартира', role: 'Client', email: 'test404@gmail.com', login: 'testovskiy', password: 'testtest'},
  ]

  constructor() { }

  getUsers() {
    return this.users
  }

  deleteUser(id: number) {
    // delete this.users[this.users.indexOf((this.users.filter(user => user.id == id))[0], 0)]
    this.users = this.users.filter(user => user !== this.users.filter(user => user.id == id)[0]);
    console.log(this.users)
  }
  addUser(user: User) {
    this.users.push(user)
  }
}
