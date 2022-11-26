import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {RestaurantsComponent} from "./restaurants/restaurants.component";
import {LoginComponent} from "./login/login.component";
import {RestaurantComponent} from "./restaurant/restaurant.component";
import {CreateRestaurantComponent} from "./create-restaurant/create-restaurant.component";
import {SignupComponent} from "./signup/signup.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantComponent},
  {path: 'createrestaurant', component: CreateRestaurantComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},

  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: '/error'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
