import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Restaurant} from "../entity/Restaurant";
import {RestaurantsService} from "../services/restaurants.service";
import {MenuService} from "../services/menu.service";
import {Dish} from "../entity/Dish";
import {Drink} from "../entity/Drink";
import {CookieService} from "ngx-cookie-service";
import {FormBuilder, Validators} from "@angular/forms";
import {OrdersService} from "../services/orders.service";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  restaurantId: number
  restaurant: Restaurant = new Restaurant()
  dishesCategories: string[] = []
  drinksCategories: string[] = []
  currentDishes: Dish[] = []
  sortedDishes: Dish[] = []
  currentDrinks: Drink[] = []
  sortedDrinks: Drink[] = []
  amount: number[] = []
  empty: boolean = false
  editToggle: boolean = false
  role: string = ''
  dishForm: any
  drinkForm: any
  addDishToggle: boolean = false
  addDrinkToggle: boolean = false
  makeOrder: boolean = false
  dishesBasket: Dish[] = []
  drinksBasket: Drink[] = []

  constructor(
    private route: ActivatedRoute,
    public restaurantsService: RestaurantsService,
    public menuService: MenuService,
    private cookieService: CookieService,
    private ordersService: OrdersService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    if (this.cookieService.get('dishes')) {
      this.dishesBasket = JSON.parse(this.cookieService.get('dishes'))
    }
    if (this.cookieService.get('drinks')) {
      this.drinksBasket = JSON.parse(this.cookieService.get('drinks'))
    }

    this.role = this.cookieService.get('role')
    this.route.params.subscribe({
      next: (params: Params) => {
        this.restaurantId = +params['id']
        this.restaurantsService.getRestaurant(this.restaurantId).subscribe({
          next: (msg) => {
            console.log(JSON.parse(String(msg.body)))
            this.restaurant = JSON.parse(String(msg.body))
            this.currentDishes = this.restaurant.menu.dishes
            this.currentDrinks = this.restaurant.menu.drinks
            for (let i = 0; i < this.currentDishes.length; i++) {
              this.currentDishes[i] = {...this.currentDishes[i], ...{amount: 0}}
            }
            for (let i = 0; i < this.currentDrinks.length; i++) {
              this.currentDrinks[i] = {...this.currentDrinks[i], ...{amount: 0}}
            }
            this.sortedDishes = this.currentDishes
            this.sortedDrinks = this.currentDrinks
            this.dishesCategories.push(this.currentDishes[0]?.category)
            this.drinksCategories.push(this.currentDrinks[0]?.category)
            this.amount.length = this.currentDishes.length + this.currentDrinks.length
            this.amount.fill(0)
          },
          error: (err) => {
            console.log('error', err)
          },
          complete: () => {}
        })
      },
      error: (err) => {
        console.log('error received:', err)
      }
    })
    this.dishForm = this.fb.group({
        name: ['', Validators.required],
        category: ['', Validators.required],
        description: ['', Validators.required],
        price: ['', Validators.required],
        weight: ['', Validators.required],
        calories: ['', Validators.required],
        menu: [null]
    })
    this.drinkForm = this.fb.group({
        name: ['', Validators.required],
        category: ['', Validators.required],
        description: ['', Validators.required],
        price: ['', Validators.required],
        priceOfBottle: ['', Validators.required],
        volume: ['', Validators.required],
        menu: [null]
    })
    window.scrollTo(0,0)
  }

  // ngAfterViewInit() {
  //   window.addEventListener("scroll", this.onWindowScroll, true)
  // }

  // @HostListener("window:scroll", ['$event'])
  // onWindowScroll() {
  //   console.log(window.scrollY)
  // }

  getSortedDishes() {
    // console.log(this.sortedDishes[0].amount)
    return this.sortedDishes
  }
  getSortedDrinks() {
    return this.sortedDrinks
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

  getRestaurant(id: number) {
    this.restaurantsService.getRestaurant(id).subscribe({
      next: (msg) => {
        console.log(msg)
      },
      error: (err) => {
        console.log('error', err)
      },
      complete: () => {}
    })
  }

  getMenus() {
    this.restaurantsService.getMenus().subscribe({
      next: (msg) => {
        console.log(msg)
      },
      error: (err) => {
        console.log('error', err)
      },
      complete: () => {}
    })
  }

  addToDishBasket(dish: any) {
    if (dish != null) {
      let withoutAmount = {...dish}
      Object.keys(withoutAmount).forEach((key: any) => {
        if (key == 'amount')
          delete withoutAmount[key]
        if (key == 'description')
          delete withoutAmount[key]
        if (key == 'weight')
          delete withoutAmount[key]
      })
      for (let i = 0; i < dish.amount; i++) {
        this.dishesBasket.push(withoutAmount)
      }
      this.cookieService.set('dishes', JSON.stringify(this.dishesBasket))
      setTimeout(() => {
        window.location.reload()
      }, 300)
    }
  }
  addToDrinkBasket(drink: any) {
    if (drink != null) {
      let withoutAmount = {...drink}
      Object.keys(withoutAmount).forEach((key: any) => {
        if (key == 'amount')
          delete withoutAmount[key]
        if (key == 'description')
          delete withoutAmount[key]
      })
      for (let i = 0; i < drink.amount; i++) {
        this.drinksBasket.push(withoutAmount)
      }
      this.cookieService.set('drinks', JSON.stringify(this.drinksBasket))
      setTimeout(() => {
        window.location.reload()
      }, 300)
    }
  }

  submit() {
    if (this.dishForm.valid) {
      const newDish = {...this.dishForm.value}
      this.restaurantsService.addDish(this.restaurantId, newDish).subscribe({
        next: (msg) => {
          console.log(msg)
        },
        error: (err) => {
          console.log('error', err)
        },
         complete: () => {
           setTimeout(() => {
             window.location.reload()
           }, 10)
         }
      })
    }
    if (this.drinkForm.valid) {
      const newDrink = {...this.drinkForm.value}
      this.restaurantsService.addDrink(this.restaurantId, newDrink).subscribe({
        next: (msg) => {
          console.log(msg)
        },
        error: (err) => {
          console.log('error', err)
        },
        complete: () => {
          setTimeout(() => {
            window.location.reload()
          }, 10)
        }
      })
    }
    // if (this.makeOrder) {
    //
    //   this.ordersService.addOrder()
    // }
  }

  showInfo() {
    this.cookieService.delete('dishes')
    this.cookieService.delete('drinks')
  }
}
