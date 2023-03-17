import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {RestaurantsComponent} from "./restaurants/restaurants.component";
import {LoginComponent} from "./login/login.component";
import {RestaurantComponent} from "./restaurant/restaurant.component";
import {CreateRestaurantComponent} from "./create-restaurant/create-restaurant.component";
import {SignupComponent} from "./signup/signup.component";
import {OrdersComponent} from "./orders/orders.component";
import {UserspageComponent} from "./userspage/userspage.component";
import {ReferenceComponent} from "./reference/reference.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {CheckoutOrderComponent} from "./checkout-order/checkout-order.component";
import {BasketComponent} from "./basket/basket.component";
import {CourierOrdersComponent} from "./courier-orders/courier-orders.component";
import {OrdersArchieveComponent} from "./orders-archieve/orders-archieve.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantComponent},
  {path: 'createrestaurant', component: CreateRestaurantComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'userspage', component: UserspageComponent},
  {path: 'reference', component: ReferenceComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'checkoutorder', component: CheckoutOrderComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'courierorders', component: CourierOrdersComponent},
  {path: 'ordersarchieve', component: OrdersArchieveComponent},

  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: '/error'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
