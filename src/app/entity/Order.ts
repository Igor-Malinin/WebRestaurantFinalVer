import {Restaurant} from "./Restaurant";
import {User} from "./User";
import {TableInRestaurant} from "./TableInRestaurant";

export class Order {
  id: number
  restaurant: any
  user: User
  needDelivery: boolean
  orderedTime: any
  seatNumber: any
  isDone: any
  dishes: any
  drinks: any
  // address: string
}
