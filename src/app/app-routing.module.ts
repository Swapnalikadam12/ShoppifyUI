import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { AdminloginComponent } from './Components/adminlogin/adminlogin.component';
import { CartDashboardComponent } from './Components/cart-dashboard/cart-dashboard.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductUploadComponent } from './Components/product-upload/product-upload.component';
import { RetailerLoginComponent } from './Components/retailer-login/retailer-login.component';
import { RetailerRegisterComponent } from './Components/retailer-register/retailer-register.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { UserloginComponent } from './Components/userlogin/userlogin.component';
import { CartdashserviceService } from './Services/cartdashservice.service';
import { ForgotserviceService } from './Services/forgotservice.service';

const routes: Routes = [
  {path:"",redirectTo:"home", pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"admindashboard",component:AdminDashboardComponent},
  {path:"retailerlogin",component:RetailerLoginComponent},
  {path:"retailerregister",component:RetailerRegisterComponent},
  {path:"productupload",component:ProductUploadComponent},
  {path:"userlogin",component:UserloginComponent},
  {path:"userregister",component:UserRegisterComponent},
  {path:"forgotpassword",component:ForgotPasswordComponent},
  {path:"cartdashboard",component:CartDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
