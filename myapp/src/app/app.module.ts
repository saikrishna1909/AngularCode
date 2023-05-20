import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { ShowAllProductsComponent } from './show-all-products/show-all-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { GetProductComponent } from './get-product/get-product.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { AllUserOrdersComponent } from './all-user-orders/all-user-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { authInterceptorProviders } from './auth.interceptor';
import { OrderConfirmationComponent } from './order-confirmation/order-conformation.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    AdminDashboardComponent,
    AllOrdersComponent,
    ShowAllProductsComponent,
    UpdateProductComponent,
    AdminLoginComponent,
    CartDetailsComponent,
    GetProductComponent,
    HomeComponent,
    NavbarComponent,
    SearchProductComponent,
    AllUserOrdersComponent,
    OrderConfirmationComponent,
    OrderDetailsComponent,
    UserHomeComponent,
    UserLoginComponent,
    UserSignupComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,NgxPaginationModule,AppRoutingModule,RouterModule,BrowserAnimationsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
