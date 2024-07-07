import { AdminComponent } from './admin/admin.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ContantComponent } from './components/contant/contant.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BuyCartDetaisComponent } from './components/buy-cart-detais/buy-cart-detais.component';
import { LoadingComponent } from './components/loading/loading.component';

export const routes: Routes = [
    {path : "" , redirectTo:"home", pathMatch:"full"},
    {path:"home",component:HomeComponent},
    {path:"products",loadComponent:()=>import("./components/products/products.component").then((c)=> c.ProductsComponent)},
    {path:"contact",component:ContantComponent},
    {path:"product-details/:id",component:ProductDetailsComponent},
    {path:"payment",component:BuyCartDetaisComponent},
    {path:"loading",component:LoadingComponent},
    {path:"loading",component:LoadingComponent},
    {path:"admin",loadChildren:()=>import("./admin/admin.module").then(m=>m.AdminModule)},

];
