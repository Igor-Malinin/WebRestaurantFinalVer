import {Component, HostListener, OnInit} from '@angular/core';
import {Restaurant} from "../entity/Restaurant";
import {RestaurantsService} from "../services/restaurants.service";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  constructor(
    public restaurantsService: RestaurantsService
  ) {
  }

  ngOnInit(): void {

  }



}
