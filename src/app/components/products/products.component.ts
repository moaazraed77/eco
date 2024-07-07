import { FormBuilder, Validators } from '@angular/forms';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { product } from '../../modules/interfaces/product.interface';
import { DataService } from '../../modules/services/data.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { Router, RouterModule } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { addFavourite, removeFavourite } from '../../modules/store/action';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, RouterModule, LoadingComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: product[] = []
  favourits = this.dataServ.favourits()
  carts = this.dataServ.carts()
  paginationSize: number = 10;
  paginationCurrentPage: number = 1;
  loading: boolean = false;

  constructor(private dataServ: DataService, public scroll: ViewportScroller) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.dataServ.getDataAPI("").subscribe(data => {
      for (const key in data) {
        this.products.push(data[key])
      }
      this.loading = false;
    })
  }

  setFav(item: product) {
    let favs = this.dataServ.favourits()
    if (!favs.find(ele => item.id == ele.id)) {
      this.dataServ.favourits.update((items) => {
        items.push(item)
        return items
      })
    }
    else {
      let favs = this.dataServ.favourits();
      this.dataServ.favourits.update((items) => {
        items.splice(favs.indexOf(item), 1)
        return items
      })
    }
    if (localStorage.getItem("favourites")!)
      localStorage.setItem("favourites", JSON.stringify(this.dataServ.favourits()))
    else
      localStorage.setItem("favourites", JSON.stringify(this.dataServ.favourits()))
  }

  getFavourites() {
    if (localStorage.getItem("favourites")!)
      this.dataServ.favourits.set(JSON.parse(localStorage.getItem("favourites")!))
    else
      localStorage.setItem("carts", JSON.stringify(this.dataServ.favourits()))

  }

  isFavourite(item: product) {
    let favs = this.dataServ.favourits()
    return favs.find(ele => item.id == ele.id) ? true : false
  }


  // ------------------------------------------------------------
  addToCart(item: product) {
    let carts = this.dataServ.carts()
    if (!carts.find(ele => item.id == ele.id)) {
      this.dataServ.carts.update((items) => {
        items.push(item)
        return items
      })
    }
    else {
      let carts = this.dataServ.carts();
      this.dataServ.carts.update((items) => {
        items.splice(carts.indexOf(item), 1)
        return items
      })
    }
    if (localStorage.getItem("carts")!)
      localStorage.setItem("carts", JSON.stringify(this.dataServ.carts()))
    else
      localStorage.setItem("carts", JSON.stringify(this.dataServ.carts()))
  }

  isInCart(item: product) {
    let carts = this.dataServ.carts()
    return carts.find(ele => item.id == ele.id) ? true : false
  }

  getCarts() {
    if (localStorage.getItem("carts")!)
      this.dataServ.favourits.set(JSON.parse(localStorage.getItem("carts")!))
    else
      localStorage.setItem("carts", JSON.stringify(this.dataServ.carts()))

  }



}
