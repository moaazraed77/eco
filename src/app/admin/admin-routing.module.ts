import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: "", component: AdminComponent },
  { path: "home", loadComponent: () => import("./home/home.component").then(c => c.HomeComponent) },
  { path: "products", loadComponent: () => import("./products/products.component").then(c => c.ProductsComponent) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
