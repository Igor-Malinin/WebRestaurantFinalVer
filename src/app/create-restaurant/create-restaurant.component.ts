import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RestaurantsService} from "../services/restaurants.service";
import {Menu} from "../entity/Menu";

class CookieService {
}

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.scss']
})
export class CreateRestaurantComponent implements OnInit {

  newTokens: any
  formCreateRest: any

  constructor(
    private http: HttpClient,
    private restaurantsService: RestaurantsService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formCreateRest = this.fb.group({
      // id: [null],
      restaurantName: ['', Validators.required],
      address: ['', Validators.required],
      kitchenSpeciality: ['', Validators.required],
      wallpaperURL: ['', Validators.required],
      staff: [[]],
      orders: [[]],
      tables: this.fb.array([
        this.fb.group({
          restaurantId: [null],
          numberOfSeats: ['', Validators.required],
          startOfBookingTime: ['2022-12-12T23:23:39.833+00:00'],
          booked: [true]
        })
      ]),
      menu: this.fb.group({
        dishes: this.fb.array([
          this.fb.group({
            name: ['', Validators.required],
            category: ['', Validators.required],
            description: ['', Validators.required],
            price: ['', Validators.required],
            weight: ['', Validators.required],
            calories: ['', Validators.required],
            menu: [null]
          })
        ]),
        drinks: this.fb.array([
          this.fb.group({
            name: ['', Validators.required],
            category: ['', Validators.required],
            description: ['', Validators.required],
            price: ['', Validators.required],
            priceOfBottle: ['', Validators.required],
            volume: ['', Validators.required],
            menu: [null]
          })
        ]),
      }),
      latitude: [50.212562],
      longitude: [50.18084]
    })
  }

  get tables() {
    return this.formCreateRest.controls["tables"] as FormArray
  }
  addTable() {
    const tablesForm = this.fb.group({
      restaurantId: [null],
      numberOfSeats: ['', Validators.required],
      startOfBookingTime: ['2022-12-12T23:23:39.833+00:00'],
      booked: [true]
    })

    this.tables.push(tablesForm)
  }
  deleteTable(tableIndex: number) {
    this.tables.removeAt(tableIndex)
  }

  get dishes() {
    return this.formCreateRest.controls["menu"].controls['dishes'] as FormArray
  }

  addDish() {
    const dishesForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      weight: ['', Validators.required],
      calories: ['', Validators.required],
      menu: [null]
    })

    this.dishes.push(dishesForm)
  }
  deleteDish(dishIndex: number) {
    this.dishes.removeAt(dishIndex)
  }

  get drinks() {
    return this.formCreateRest.controls["menu"].controls['drinks'] as FormArray
  }

  addDrink() {
    const drinksForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      volume: ['', Validators.required],
      priceOfBottle: ['', Validators.required],
      menu: [null]
    })

    this.drinks.push(drinksForm)
  }
  deleteDrink(drinkIndex: number) {
    this.drinks.removeAt(drinkIndex)
  }

  submit() {
    const newRestData = {...this.formCreateRest.value}
    let finalRestData = {...newRestData}
    let restaurantId: number = 0
    let menu: Menu = {...newRestData.menu}
    if(this.formCreateRest.valid) {
      // newRestData.telephoneNumber = Number(newRestData.telephoneNumber)
      // this.formCreateRest.reset()
    }
    Object.keys(finalRestData).forEach((key: any) => {
      if (key == 'menu')
        delete finalRestData[key]
    })
    finalRestData = {...newRestData, ...{menu: null}}
    console.log(finalRestData)
    console.log(menu)
    console.log(JSON.stringify(finalRestData))
    this.restaurantsService.addRestaurant(finalRestData).subscribe({
      next: (msg) => {
        console.log(msg.body)
        this.restaurantsService.addMenu(JSON.parse(String(msg.body)).id, menu).subscribe({
          next: (msg) => {
            console.log(msg)
          },
          error: (err) => {
            console.log('error', err)
          },
          complete: () => {}
        })
      },
      error: (err) => {
        console.log('error', err)
      },
      complete: () => {
      }
    })
  }

  showCon() {
    console.log(this.formCreateRest.controls['tables'].controls[0].controls['numberOfSeats'])
  }
}
