import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Restaurant} from "../entity/Restaurant";
import {RestaurantsService} from "../services/restaurants.service";
import {MenuService} from "../services/menu.service";
import {Dish} from "../entity/Dish";
import {Drink} from "../entity/Drink";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  restaurantId: number
  restaurant?: Restaurant
  dishesCategories: string[] = []
  drinksCategories: string[] = []
  currentDishes: Dish[] = []
  sortedDishes: Dish[] = []
  currentDrinks: Drink[] = []
  sortedDrinks: Drink[] = []
  amount: number[] = []
  empty: boolean = false

  constructor(
    private route: ActivatedRoute,
    public restaurantsService: RestaurantsService,
    public menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params: Params) => {
        this.restaurantId = +params['id']
        this.restaurant = this.restaurantsService.getById(+params['id'])
      },
      error: (err) => {
        console.log('error received:', err)
      }
    })
    this.currentDishes = this.menuService.dishes.filter((menuId, index) => {
      return this.restaurantId == this.menuService.dishes[index].menu_id
    })
    this.currentDrinks = this.menuService.drinks.filter((menuId, index) => {
      return this.restaurantId == this.menuService.drinks[index].menu_id
    })
    this.sortedDishes = this.currentDishes
    this.sortedDrinks = this.currentDrinks
    this.dishesCategories.push(this.currentDishes[0]?.category)
    this.drinksCategories.push(this.currentDrinks[0]?.category)
    this.amount.length = this.currentDishes.length + this.currentDrinks.length
    this.amount.fill(0)
  }

  dishCategories() {
    this.currentDishes.map(category => {
      if(!this.dishesCategories.includes(category.category))
        this.dishesCategories.push(category.category)
    })
    return this.dishesCategories
  }
  drinkCategories() {
    this.currentDrinks.map(category => {
      if(!this.drinksCategories.includes(category.category))
        this.drinksCategories.push(category.category)
    })
    return this.drinksCategories
  }

  sortDishes(cat: string) {
    this.sortedDishes = this.currentDishes.filter((category, index) => category.category === cat)
  }
  sortDrinks(cat: string) {
    this.sortedDrinks = this.currentDrinks.filter((category, index) => category.category === cat)
  }

  incValDish(i: number) {
    this.sortedDishes[i].amount++
  }
  incValDrink(i: number) {
    this.sortedDrinks[i].amount++
  }

  decValDish(i: number) {
    this.sortedDishes[i].amount--
  }
  decValDrink(i: number) {
    this.sortedDrinks[i].amount--
  }
}
