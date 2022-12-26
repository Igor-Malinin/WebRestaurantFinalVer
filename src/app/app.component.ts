import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'FrontRestaurant';
  isAuthenticated: boolean = false
  amountInBasket: number = 0
  role: string = ''

  constructor(
    public authService: AuthService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    if (this.cookieService.check('isAuthenticated')) {
      this.isAuthenticated = (this.cookieService.get('isAuthenticated') == 'OK')
      this.authService.setAuth(this.isAuthenticated)
      this.role = this.cookieService.get('role')
      if (this.cookieService.get('dishes')) {
        let amountDishes = JSON.parse(this.cookieService.get('dishes')).length
        this.amountInBasket += amountDishes
      }
      if (this.cookieService.get('drinks')) {
        let amountDrinks = JSON.parse(this.cookieService.get('drinks')).length
        this.amountInBasket += amountDrinks
      }
    }
  }
  isAuth(): boolean {
    return this.authService.getIsAuth()
  }

  logout() {
    this.authService.logout()
  }

}
