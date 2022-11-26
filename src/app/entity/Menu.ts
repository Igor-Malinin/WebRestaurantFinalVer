import {Dish} from "./Dish";
import {Drink} from "./Drink";


export class Menu {
  id?: number
  category: Dish | Drink
}
