import {Component, HostListener, OnInit} from '@angular/core';
import {Restaurant} from "../entity/Restaurant";
import {RestaurantsService} from "../services/restaurants.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  role: string = ''
  restaurants: Restaurant[] = []

  constructor(
    public restaurantsService: RestaurantsService,
    private cookieService: CookieService
  ) {
  }

  ngOnInit(): void {
    this.role = this.cookieService.get('role')
    this.restaurantsService.getRestaurants().subscribe({
      next: (msg) => {
        console.log(msg.body)
        this.restaurants = JSON.parse(String(msg.body))
      },
      error: (err) => {
        console.log('error', err)
      },
      complete: () => {}
    })
  }

  getRestaurants() {
    return this.restaurantsService.restaurants
  }

  showCon() {
    this.restaurantsService.getRestaurants().subscribe({
      next: (msg) => {
        console.log(msg)
      },
      error: (err) => {
        console.log('error', err)
      },
      complete: () => {}
    })
  }
}
