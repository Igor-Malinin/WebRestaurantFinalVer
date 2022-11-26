import { Injectable } from '@angular/core';
import {Menu} from "../entity/Menu";
import {Dish} from "../entity/Dish";
import {Drink} from "../entity/Drink";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  dishes: Dish[] = [
    {id: 1, name: 'Русская закуска', category: 'Холодные закуски', price: 1000, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 1},
    {id: 2, name: 'Горячая закуска', category: 'Горячие закуски', price: 1000, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 1},
    {id: 3, name: 'Русский салат', category: 'Салаты', price: 1000, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 1},
    {id: 4, name: 'Рис с овощами', category: 'Горячие блюда', price: 1000, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 1},
    {id: 5, name: 'Борщ', category: 'Супы', price: 1000, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 1},
    {id: 6, name: 'Жареная картошка', category: 'Гарниры', price: 1000, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 1},
    {id: 7, name: 'Русский хлеб', category: 'Хлеб и выпечка', price: 1000, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 1},
    {id: 8, name: 'Русский соус', category: 'Соусы', price: 1000, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 1},
    {id: 9, name: 'Русский десерт', category: 'Десерты', price: 1000, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 1},
    {id: 10, name: 'Язь', category: 'Горячие блюда', price: 1000, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 1},
    {id: 11, name: 'Жаркое', category: 'Супы', price: 1000, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 1},
    {id: 12, name: 'Бургер', category: 'Горячие блюда', price: 1000, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 2},
    {id: 13, name: 'Стейк', category: 'Горячие блюда', price: 1000, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 2},
    {id: 14, name: 'Картошка фри', category: 'Гарниры', price: 1000, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 2},
  ]
  drinks: Drink[] = [
    {id: 1, category: 'Безалкогольные коктейли', description: 'desc', name: 'Рус кок', price: 1477, priceOfBottle: 8000, volume: 500, amount: 0, menu_id: 1},
    {id: 2, category: 'Алкогольные коктейли', description: 'desc', name: 'Monkey47', price: 1477, priceOfBottle: 8000, volume: 500, amount: 0, menu_id: 1},
    {id: 3, category: 'Негазированные напитки', description: 'desc', name: 'Яблочный сок', price: 1477, priceOfBottle: 8000, volume: 500, amount: 0, menu_id: 1},
    {id: 4, category: 'Газированные напитки', description: 'desc', name: 'Байкал', price: 1477, priceOfBottle: 8000, volume: 500, amount: 0, menu_id: 1},
    {id: 5, category: 'Чай', description: 'desc', name: 'Зеленый чай', price: 1477, priceOfBottle: 8000, volume: 500, amount: 0, menu_id: 1},
    {id: 6, category: 'Кофе', description: 'desc', name: 'Русиано', price: 1477, priceOfBottle: 8000, volume: 500, amount: 0, menu_id: 1},
    {id: 7, category: 'Кофе', description: 'desc', name: 'Американо', price: 1477, priceOfBottle: 8000, volume: 500, amount: 0, menu_id: 2},
    {id: 8, category: 'Газированные напитки', description: 'desc', name: 'Coca-cola', price: 1477, priceOfBottle: 8000, volume: 500, amount: 0, menu_id: 2},
  ]

  constructor() { }


}
