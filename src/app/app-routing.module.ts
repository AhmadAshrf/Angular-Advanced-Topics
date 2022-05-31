import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { AuthGuard } from './gurd/auth.guard';
import { UserLoginnComponent } from './Components/user-loginn/user-loginn.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderMasterComponent } from './Components/order/order-master/order-master.component';
import { ProductListComponent } from './Components/order/product-list/product-list.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './Components/order/product-details/product-details.component';

const routes: Routes = [
  //First Match Win Strategy
  {path: '', component:LayoutComponent, children:[
    {path: '', redirectTo:'/Home', pathMatch:'full'},
    {path:'Home', component:HomeComponent},
    {path:'Products', component: ProductListComponent},
    {path:'Products/:id', component:ProductDetailsComponent},
    {path :'Product/add', component:AddProductComponent},
    {path:'Order', component:OrderMasterComponent, canActivate:[AuthGuard]},
    { //Lazy Loading Impelementation
      path: 'user', 
      loadChildren: () => import('src/app/Components/user-module/user-module.module').then(m => m.UserModuleModule)
    },
  ]},
  {path: 'Login', component:UserLoginnComponent},
  {path: 'Register', component:UserRegisterComponent},
  {path: 'Logout', component:UserLoginnComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
