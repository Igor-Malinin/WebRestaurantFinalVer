import {Restaurant} from "./Restaurant";
import {Role} from "./Role";

export class User {
  id: number
  surname: string
  name: string
  telephone: number
  password: string
  address: string
  myOrders: any
  latitude: number
  longitude: number
  placeOfWork: any
  role: Role
  working: boolean
}
