import { Injectable } from '@angular/core';
import {Menu} from "../entity/Menu";
import {Dish} from "../entity/Dish";
import {Drink} from "../entity/Drink";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  dishes: any[] = [
    {id: 1, name: 'Русская закуска', category: 'Холодные закуски', price: 1000, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 1},
    {id: 2, name: 'Горячая закуска', category: 'Горячие закуски', price: 1200, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 1},
    {id: 3, name: 'Русский салат', category: 'Салаты', price: 500, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 1},
    {id: 4, name: 'Рис с овощами', category: 'Горячие блюда', price: 700, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 1},
    {id: 5, name: 'Борщ', category: 'Супы', price: 900, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 1},
    {id: 6, name: 'Жареная картошка', category: 'Гарниры', price: 2000, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 1},
    {id: 7, name: 'Русский хлеб', category: 'Хлеб и выпечка', price: 2500, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 1},
    {id: 8, name: 'Русский соус', category: 'Соусы', price: 100, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 1},
    {id: 9, name: 'Русский десерт', category: 'Десерты', price: 200, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 1},
    {id: 10, name: 'Язь', category: 'Горячие блюда', price: 3200, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 1},
    {id: 11, name: 'Жаркое', category: 'Супы', price: 1700, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 1},
    {id: 12, name: 'Бургер', category: 'Горячие блюда', price: 2500, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 2},
    {id: 13, name: 'Стейк', category: 'Горячие блюда', price: 4700, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 2},
    {id: 14, name: 'Картошка фри', category: 'Гарниры', price: 2100, description: 'somedesc', weight: 200, calories: 500, amount: 0, menu_id: 2},
  ]
  drinks: any[] = [
    {id: 1, category: 'Безалкогольные коктейли', description: 'desc', name: 'Русский коктейль', price: 1479, priceOfBottle: 8000, volume: 500, amount: 0, menu_id: 1},
    {id: 2, category: 'Алкогольные коктейли', description: 'desc', name: 'Monkey47', price: 1200, priceOfBottle: 8000, volume: 500, amount: 0, menu_id: 1},
    {id: 3, category: 'Негазированные напитки', description: 'desc', name: 'Яблочный сок', price: 400, priceOfBottle: 8000, volume: 500, amount: 0, menu_id: 1},
    {id: 4, category: 'Газированные напитки', description: 'desc', name: 'Байкал', price: 200, priceOfBottle: 8000, volume: 500, amount: 0, menu_id: 1},
    {id: 5, category: 'Чай', description: 'desc', name: 'Зеленый чай', price: 149, priceOfBottle: 8000, volume: 500, amount: 0, menu_id: 1},
    {id: 6, category: 'Кофе', description: 'desc', name: 'Русиано', price: 219, priceOfBottle: 8000, volume: 500, amount: 0, menu_id: 1},
    {id: 7, category: 'Кофе', description: 'desc', name: 'Американо', price: 240, priceOfBottle: 8000, volume: 500, amount: 0, menu_id: 2},
    {id: 8, category: 'Газированные напитки', description: 'desc', name: 'Coca-cola', price: 120, priceOfBottle: 8000, volume: 500, amount: 0, menu_id: 2},
  ]

  constructor() { }


}
