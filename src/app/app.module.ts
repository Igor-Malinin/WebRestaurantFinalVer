import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { LoginComponent } from './login/login.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SignupComponent } from './signup/signup.component';
import { OrdersComponent } from './orders/orders.component';
import { UserspageComponent } from './userspage/userspage.component';
import { ReferenceComponent } from './reference/reference.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CheckoutOrderComponent } from './checkout-order/checkout-order.component';
import { BasketComponent } from './basket/basket.component';
import { CourierOrdersComponent } from './courier-orders/courier-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorPageComponent,
    RestaurantsComponent,
    LoginComponent,
    RestaurantComponent,
    CreateRestaurantComponent,
    SignupComponent,
    OrdersComponent,
    UserspageComponent,
    ReferenceComponent,
    ContactsComponent,
    CheckoutOrderComponent,
    BasketComponent,
    CourierOrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
