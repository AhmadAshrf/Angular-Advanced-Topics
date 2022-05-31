import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductListComponent } from './Components/order/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightBoxDirective } from './Directives/light-box.directive';
import { EgptoUSDPipe } from './Pipes/egpto-usd.pipe';
import { OrderMasterComponent } from './Components/order/order-master/order-master.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { UserLoginnComponent } from './Components/user-loginn/user-loginn.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    FooterComponent,
    ProductListComponent,
    LightBoxDirective,
    EgptoUSDPipe,
    OrderMasterComponent,
    NotFoundComponent,
    LayoutComponent,
    ProductListComponent,
    UserLoginnComponent,
    AddProductComponent,
    UserRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
