import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardClientComponent } from './components/dashboard-client/dashboard-client.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { DisplayAnnonceComponent } from './components/display-annonce/display-annonce.component';
import { DisplayOrderComponent } from './components/display-order/display-order.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { EditAnnonceComponent } from './components/edit-annonce/edit-annonce.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ShopComponent } from './components/shop/shop.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:SignupComponent},
  {path:'registerAdmin',component:SignupComponent},
  {path:'registerClient',component:SignupComponent},
  {path:'shop',component:ShopComponent},
  {path:'contact',component:ContactComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'dashbord',component:DashbordComponent},
  {path:'dashboardClient/:id',component:DashboardClientComponent},
  {path:'displayUser/:id',component:DisplayUserComponent},
  {path:'displayAnnonce/:id',component:DisplayAnnonceComponent},
  {path:'editAnnonce/:id',component:EditAnnonceComponent},
  {path:'editUser/:id',component:EditUserComponent},
  {path:'dashboardUser/:id',component:DashboardUserComponent},
  {path:'displayOrder/:id',component:DisplayOrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
