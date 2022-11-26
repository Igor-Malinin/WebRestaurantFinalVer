import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RestaurantsService} from "../services/restaurants.service";

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
      id: [null],
      name: [''],
      address: [''],
      amountOfPlaces: [''],
      dishes: this.fb.array([
        this.fb.group({
          id: [null],
          name: [''],
          category: [''],
          description: [''],
          price: [''],
          weight: [''],
          calories: [''],
          amount: [0],
          menu_id: [null]
        })
      ]),
      drinks: this.fb.array([
        this.fb.group({
          id: [null],
          name: [''],
          category: [''],
          description: [''],
          price: [''],
          volume: [''],
          priceOfBottle: [''],
          amount: [0],
          menu_id: [null]
        })
      ])
      // address: this.fb.group({
      //   street: [''],
      //   house: ['']
      // }),
    })
  }

  submit() {
      const newRestData = {...this.formCreateRest.value}
      console.log(newRestData)
    if(this.formCreateRest.valid) {
      // newRestData.telephoneNumber = Number(newRestData.telephoneNumber)
      this.formCreateRest.reset()
    }

  }

  get dishes() {
    return this.formCreateRest.controls["dishes"] as FormArray
  }

  addDish() {
    const dishesForm = this.fb.group({
      id: [null],
      name: [''],
      category: [''],
      description: [''],
      price: [''],
      weight: [''],
      calories: [''],
      amount: [0],
      menu_id: [null]
    })

    this.dishes.push(dishesForm)
  }
  deleteDish(dishIndex: number) {
    this.dishes.removeAt(dishIndex)
  }

  get drinks() {
    return this.formCreateRest.controls["drinks"] as FormArray
  }

  addDrink() {
    const drinksForm = this.fb.group({
      id: [null],
      name: [''],
      category: [''],
      description: [''],
      price: [''],
      volume: [''],
      priceOfBottle: [''],
      amount: [0],
      menu_id: [null]
    })

    this.drinks.push(drinksForm)
  }
  deleteDrink(drinkIndex: number) {
    this.drinks.removeAt(drinkIndex)
  }
}
