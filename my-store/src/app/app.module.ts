import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { FavsComponent } from './components/favs/favs.component';
import { CardsFavComponent } from './components/cards-fav/cards-fav.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CategoryComponent } from './pages/category/category.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    HomeComponent,
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    NavbarComponent,
    ReversePipe,
    FavsComponent,
    CardsFavComponent,
    NotFoundComponent,
    CategoryComponent,
    MycartComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
  ],
  imports: [
    SwiperModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
