import { Injectable } from '@angular/core';
import {Restaurant} from "../entity/Restaurant";
import {Menu} from "../entity/Menu";
import {TableInRestaurant} from "../entity/TableInRestaurant";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthTokens} from "../entity/AuthTokens";
import {CookieService} from "ngx-cookie-service";
import {Drink} from "../entity/Drink";
import {Dish} from "../entity/Dish";

const API_URL: string = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  authTokens: AuthTokens = {
    access_token: this.cookieService.get('access_token'),
    refresh_token: this.cookieService.get('refresh_token')
  }

  restaurants: Restaurant[] = [
    {id: 1, restaurantName: 'Русская кухня', description: 'Русская кухня – одна из самых интересных национальных кухонь в мире. Она привлекает многих своим необычайным национальным колоритом. Такие блюда, как щи, каши, пироги, блины, а также квас, сбитень, считаются исконно русскими. Русская кухня является очень сытной и в то же время очень здоровой.', menu: new Menu(), tables: '', staff: '', orders: '', latitude: 0, longitude: 0, kitchenSpeciality: '', address: '', icon: '../../assets/images/RC.png', wallpaperURL: '../../assets/images/russian-rest.jpeg'},
    {id: 2, restaurantName: 'Американская кухня', description: 'Американская кухня богата разнообразием. К наиболее распространенным блюдам можно отнести различные супы-пюре, например, из тыквы, кукурузы или морепродуктов, барбекю и стейки, банановый хлеб, тыквенный пирог, традиционная индейка, корн-доги, сэндвичи и гамбургеры. Из выпечки всем известны брауни, маффины, чизкейки, пончики.', menu: new Menu(), tables: '', staff: '', orders: '', latitude: 0, longitude: 0, kitchenSpeciality: '', address: '', icon: '../../assets/images/AC.png', wallpaperURL: '../../assets/images/american-rest.jpeg'},
    {id: 3, restaurantName: 'Грузинская кухня', description: 'В Грузии большинство основных блюд делают из баранины, свинины, индейки и курицы. При их приготовлении используют пряности и зелень. Часто еду подают вместе с острыми и кислыми соусами. Овощи чаще выступают гарниром. Важной частью рациона выступают лепешки, хлеб, пироги, запеканки, изготовленные из пшеничной и кукурузной муки, а также чумизы.', menu: new Menu(), tables: '', staff: '', orders: '', latitude: 0, longitude: 0, kitchenSpeciality: '', address: '', icon: '../../assets/images/GC.png', wallpaperURL: '../../assets/images/georgian-rest.jpeg'},
    {id: 4, restaurantName: 'Итальянская кухня', description: 'Итальянская кухня характеризуется, в первую очередь, обилием свежих продуктов средиземноморского региона. Традиционные блюда итальянской кухни пользуются популярностью во всех странах мира. Итальянская кухня – это паста и соусы, это пицца и оливки, это сыр и вино, а самым популярным безалкогольным напитком в Италии является кофе.', menu: new Menu(), tables: '', staff: '', orders: '', latitude: 0, longitude: 0, kitchenSpeciality: '', address: '', icon: '../../assets/images/IC.png', wallpaperURL: '../../assets/images/italian-rest.jpeg'},
    {id: 5, restaurantName: 'Японская кухня', description: 'Японская кухня отличается предпочтением натуральных, минимально обработанных продуктов, широким применением морепродуктов, сезонностью, характерными блюдами, специфическими правилами оформления блюд, сервировкой, застольным этикетом.', menu: new Menu(), tables: '', staff: '', orders: '', latitude: 0, longitude: 0, kitchenSpeciality: '', address: '', icon: '../../assets/images/JC.png', wallpaperURL: '../../assets/images/japan-rest.jpg'},
    {id: 6, restaurantName: 'Китайская кухня', description: 'Отличительная особенность китайской кухни – сбалансированность продуктов. В китайской кухне принято использование пряных трав, которые часто обладают лечебными свойствами, а также очень популярен соевый соус. Наиболее известные блюда китайской кухни – утка по-пекински, димсам, жареный рис, столетнее яйцо, черепаховый суп.', menu: new Menu(), tables: '', staff: '', orders: '', latitude: 0, longitude: 0, kitchenSpeciality: '', address: '', icon: '../../assets/images/KC.png', wallpaperURL: '../../assets/images/chineese-rest.jpeg'},
  ]

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  getById(id: number): Restaurant | undefined {
    return this.restaurants.find(r => r.id === id)
  }

  addRestaurant(restaurant: Restaurant) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authTokens.access_token
    })

    return this.http.post(API_URL + '/test/addRestaurant', JSON.stringify(restaurant), {headers: headers, responseType: 'text' as 'json', observe: 'response'})
  }

  getRestaurants() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authTokens.access_token
    })

    return this.http.get(API_URL + '/test/restaurants', {headers: headers, responseType: 'text' as 'json', observe: 'response'});
  }

  getRestaurant(id: number) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authTokens.access_token
    })
    let params = {
      id: id
    }
    return this.http.get(API_URL + '/test/getRestaurant', {headers: headers, params: params, responseType: 'text' as 'json', observe: 'response'});
  }

  addMenu(id: number, menu: Menu) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authTokens.access_token
    })
    let params = {
      id: id
    }
    console.log(JSON.stringify(menu))
    console.log(id)

    return this.http.post(API_URL + '/test/addMenu', JSON.stringify(menu), {headers: headers, params: params, responseType: 'text' as 'json', observe: 'response'})
  }

  addDish(id: number, dish: Dish) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authTokens.access_token
    })
    let params = {
      id: id
    }

    return this.http.post(API_URL + '/test/addDish', JSON.stringify(dish), {headers: headers, params: params, responseType: 'text' as 'json', observe: 'response'})
  }

  addDrink(id: number, drink: Drink) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authTokens.access_token
    })
    let params = {
      id: id
    }

    return this.http.post(API_URL + '/test/addDrink', JSON.stringify(drink), {headers: headers, params: params, responseType: 'text' as 'json', observe: 'response'})
  }

  getMenus() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authTokens.access_token
    })

    return this.http.get(API_URL + '/test/menus', {headers: headers, responseType: 'text' as 'json', observe: 'response'});
  }
}
