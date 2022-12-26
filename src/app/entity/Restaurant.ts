import {User} from "./User";
import {Order} from "./Order";
import {Menu} from "./Menu";
import {TableInRestaurant} from "./TableInRestaurant";

export class Restaurant {
  id?: number
  restaurantName: string
  address: string
  kitchenSpeciality: string
  wallpaperURL: string
  icon: string
  description: string
  staff: any
  orders: any
  tables: any
  menu: any
  latitude: number
  longitude: number
}
