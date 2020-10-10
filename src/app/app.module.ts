import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './menu/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    MenuComponent,
    DashboardComponent,
    CartComponent
  ],
  imports: [
    AppRoutingModule ,
    FormsModule ,
    ReactiveFormsModule,
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
