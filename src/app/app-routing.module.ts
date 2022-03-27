import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'product_list', component: ProductListComponent },
  { path: 'user_list', component: UserListComponent },
  { path: 'order_list', component: OrderListComponent },
  { path: 'form', component: ContactFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
