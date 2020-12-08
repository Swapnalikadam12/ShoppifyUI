import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import {RouterModule} from '@angular/router';
import { AdminloginComponent } from './Components/adminlogin/adminlogin.component';
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component'
import {AdminserviceService} from './Services/adminservice.service'
import { HttpClientModule} from '@angular/common/http';
import { RetailerLoginComponent } from './Components/retailer-login/retailer-login.component';
import { RetailerRegisterComponent } from './Components/retailer-register/retailer-register.component';
import {RetailerloginService} from './Services/retailerlogin.service';
import {RetailerRegisterService} from './Services/retailer-register.service';
import { ProductUploadComponent } from './Components/product-upload/product-upload.component';
import { UploadProductsService} from './Services/upload-products.service';
import {ProductlistService} from './Services/productlist.service';
import { UserloginComponent } from './Components/userlogin/userlogin.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component'
import {LoginService} from './Services/login.service'
import {UserRegisterService} from './Services/user-register.service';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component'
import {ForgotserviceService} from './Services/forgotservice.service'
import {AddToCartService} from './Services/add-to-cart.service';
import { CartDashboardComponent } from './Components/cart-dashboard/cart-dashboard.component'
import {CartdashserviceService} from './Services/cartdashservice.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminloginComponent,
    AdminDashboardComponent,
    RetailerLoginComponent,
    RetailerRegisterComponent,
    ProductUploadComponent,
    UserloginComponent,
    UserRegisterComponent,
    ForgotPasswordComponent,
    CartDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AdminserviceService,RetailerloginService,RetailerRegisterService, UploadProductsService,ProductlistService,
    LoginService,UserRegisterService,ForgotserviceService,AddToCartService,CartdashserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
