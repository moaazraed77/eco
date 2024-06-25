import { AdminComponent } from './admin/admin.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ContantComponent } from './components/contant/contant.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"products",component:ProductsComponent},
    {path:"contact",component:ContantComponent},
    {path:"admin",loadChildren:()=>import("./admin/admin.module").then(m=>m.AdminModule)},

];
