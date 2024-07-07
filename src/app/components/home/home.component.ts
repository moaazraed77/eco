import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { customOptions, customOptions2 } from '../../modules/owl-carasouel/owl-carasouel';
import { RouterModule } from '@angular/router';
import { DataService } from '../../modules/services/data.service';
import { product } from '../../modules/interfaces/product.interface';
import { aboutus } from '../../modules/interfaces/aboutus.interface';
import { AboutusService } from '../../modules/services/aboutus.service';
import { addFavourite, removeFavourite } from '../../modules/store/action';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselModule, RouterModule, LoadingComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../modules/styles/offcancas-style.css']
})

export class HomeComponent implements OnInit {

  customOptions: any = customOptions;
  customOptions2: any = customOptions2;

  backgrounds: any[] = []; // for showing the data
  productsBasic: product[] = []
  productsOccasion: product[] = []
  listArray: aboutus[] = []; // for showing the data
  favourits = this.dataServ.favourits()
  loading: boolean = false;

  constructor(private dataServ: DataService, private aboutUsServ: AboutusService) { }

  ngOnInit(): void {
    this.loading = true;
    this.dataServ.getDataAPI("").subscribe(data => {
      for (const key in data) {
        if (data[key].department == "basic")
          this.productsBasic.push(data[key])
      }
      this.loading = false;
    })
    this.dataServ.getDataAPI("").subscribe(data => {
      for (const key in data)
        if (data[key].department == "occasion")
          this.productsOccasion.push(data[key])
      this.loading = false;
    })
    this.getData()
    this.getFavourites()
  }

  getData() {
    this.listArray = [];
    this.aboutUsServ.getdata("aboutus").subscribe(data => {
      for (const key in data) {
        this.listArray.push(data[key])
      }
    })
    this.aboutUsServ.getdata("background").subscribe(data => {
      for (const key in data) {
        this.backgrounds.push(data[key])
      }
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
      localStorage.setItem("favourites", JSON.stringify(this.dataServ.favourits()))

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
