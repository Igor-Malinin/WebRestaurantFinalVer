import {Restaurant} from "./Restaurant";

export class TableInRestaurant {
  id: number
  restaurantId: Restaurant
  numberOfSeats: number
  isBooked: boolean
  startOfBookingTime: Date
}
