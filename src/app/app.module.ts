import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { OfferComponent } from './components/offer/offer.component';
import { RecentComponent } from './components/recent/recent.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './components/add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { AnnonceTableComponent } from './components/annonce-table/annonce-table.component';
import { DashboardClientComponent } from './components/dashboard-client/dashboard-client.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { DisplayAnnonceComponent } from './components/display-annonce/display-annonce.component';
import { EditAnnonceComponent } from './components/edit-annonce/edit-annonce.component';
import { AnnonceComponent } from './components/annonce/annonce.component';
import { OrderClientComponent } from './components/order-client/order-client.component';
import { AnnonceClientTableComponent } from './components/annonce-client-table/annonce-client-table.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { FilterUserPipe } from './pipes/filter-user.pipe';
import { FilterPricePipe } from './pipes/filter-price.pipe';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { JwPaginationModule } from 'jw-angular-pagination';
import { OrderTableComponent } from './components/order-table/order-table.component';
import { CategoryPipe } from './pipes/category.pipe';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { AnnonceUserTableComponent } from './components/annonce-user-table/annonce-user-table.component';
import { DisplayOrderComponent } from './components/display-order/display-order.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    CarouselComponent,
    CategoriesComponent,
    FeaturedComponent,
    OfferComponent,
    RecentComponent,
    VendorComponent,
    HomeComponent,
    ShopComponent,
    ContactComponent,
    AddProductComponent,
    DashbordComponent,
    UserTableComponent,
    AnnonceTableComponent,
    DashboardClientComponent,
    DisplayUserComponent,
    DisplayAnnonceComponent,
    EditAnnonceComponent,
    AnnonceComponent,
    OrderClientComponent,
    AnnonceClientTableComponent,
    EditUserComponent,
    FilterUserPipe,
    FilterPricePipe,
    OrderTableComponent,
    CategoryPipe,
    DashboardUserComponent,
    AnnonceUserTableComponent,
    DisplayOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwPaginationModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
