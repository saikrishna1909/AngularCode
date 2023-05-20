import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminGuard } from './admin.guard';
import { UserGuard } from './user.guard';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ShowAllProductsComponent } from './show-all-products/show-all-products.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { GetProductComponent } from './get-product/get-product.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderConfirmationComponent } from './order-confirmation/order-conformation.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { AllUserOrdersComponent } from './all-user-orders/all-user-orders.component';

const routes: Routes = [
  { path: 'user/login', component: UserLoginComponent, pathMatch: 'full', title: 'User Login' },
  { path: 'admin/login', component: AdminLoginComponent, pathMatch: 'full', title: 'Admin Login' },
  { path: '', component: HomeComponent, pathMatch: 'full', title: 'Medicare' },
  { path: 'user-home', component: UserHomeComponent, canActivate: [UserGuard], pathMatch: 'full', title: 'Home' },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AdminGuard], pathMatch: 'full', title: 'Admin Dashboard' },
  { path: 'user/signup', component: UserSignupComponent, pathMatch: 'full', title: 'User Registration' },
  { path: 'admin/add-medicine', component: AddProductComponent, canActivate: [AdminGuard], pathMatch: 'full', title: 'Add Medicine' },
  { path: 'admin/get/all/medicines', component: ShowAllProductsComponent, canActivate: [AdminGuard], pathMatch: 'full', title: 'All Medicines' },
  { path: 'admin/update/medicine/:pid', component: UpdateProductComponent, canActivate: [AdminGuard], pathMatch: 'full', title: 'Update Medicine' },
  { path: 'user/search/product/:name', component: SearchProductComponent, pathMatch: 'full', title: 'Search results' },
  { path: 'show/product/class/:category', component: GetProductComponent, pathMatch: 'full', title: 'All Products' },
  { path: 'get/all/class/:category', component: GetProductComponent, pathMatch: 'full', title: 'All Products' },
  { path: 'get/cart/details', component: CartDetailsComponent, pathMatch: 'full', title: 'Cart Details' },
  { path: 'user/create/order', component: OrderDetailsComponent, canActivate: [UserGuard], pathMatch: 'full', title: 'Order Details' },
  { path: 'order-confirmation/invoice/:oid', component: OrderConfirmationComponent, canActivate: [UserGuard], pathMatch: 'full', title: 'Order Confirmation' },
  { path: 'admin/all/user-orders', component: AllOrdersComponent, canActivate: [AdminGuard], pathMatch: 'full', title: 'All Orders' },
  { path: 'order/details/:oid', component: OrderConfirmationComponent, canActivate: [AdminGuard], pathMatch: 'full', title: 'Order Details' },
  { path: 'user/get/all-orders/:username', component: AllUserOrdersComponent, canActivate: [UserGuard], pathMatch: 'full', title: 'Orders Placed' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
