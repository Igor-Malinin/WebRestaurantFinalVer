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

  constructor(
    public restaurantsService: RestaurantsService,
    private cookieService: CookieService
  ) {
  }

  ngOnInit(): void {
    this.role = this.cookieService.get('role')
  }



}
