import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavBarComponent,
    ProductDetailsComponent,
    UserListComponent,
    OrderListComponent,
    OrderDetailsComponent,
    UserDetailsComponent, 
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'orders/:orderId', component: OrderDetailsComponent },
      { path: 'users/:userId', component: UserDetailsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
