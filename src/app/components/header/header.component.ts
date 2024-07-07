import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, OnDestroy, OnInit, effect, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { product } from '../../modules/interfaces/product.interface';
import { DataService } from '../../modules/services/data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {

  // reducers=inject(Store)
  subscriptions: Subscription[] = [];
  favourits = this.dataServ.favourits
  carts = this.dataServ.carts

  constructor(private route: Router, private dataServ: DataService,private scroller:ViewportScroller) {
    if (localStorage.getItem("favourites")!)
      this.dataServ.favourits.set(JSON.parse(localStorage.getItem("favourites")!))
    else
      localStorage.setItem("favourites", JSON.stringify([]))

    if (localStorage.getItem("carts")!)
      this.dataServ.carts.set(JSON.parse(localStorage.getItem("carts")!))
    else
      localStorage.setItem("carts", JSON.stringify([]))

    effect(() => {
      this.dataServ.favourits.set(JSON.parse(localStorage.getItem("favourites")!))
      this.dataServ.carts.set(JSON.parse(localStorage.getItem("carts")!))
    })
  }

  color: string = "dark";

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.events.subscribe(link => {
        if (link instanceof NavigationEnd) {
          let linkLength = link.url.split("/").length;
          if (link.url.split("/")[linkLength - 1] == "home" || link.url.split("/")[linkLength - 1] == "") {
            this.color = "light";
            console.log(this.color);
          } else {
            this.color = "dark";
          }
        }
      })
    )
  }

  ngOnDestroy(): void {
    for (const item of this.subscriptions) {
      item.unsubscribe()
    }
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
    localStorage.setItem("favourites", JSON.stringify(this.dataServ.favourits()))
  }

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
    localStorage.setItem("carts", JSON.stringify(this.dataServ.carts()))
  }

  scroll(){
    this.scroller.scrollToAnchor("contact")
  }
}
