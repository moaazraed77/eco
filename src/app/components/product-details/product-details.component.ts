import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DataService } from '../../modules/services/data.service';
import { product } from '../../modules/interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  id: number = 0;
  product:product={} as product ;

  constructor(private activatedRoute: ActivatedRoute, private dataServ: DataService) {
    this.id = Number(activatedRoute.snapshot.paramMap.get("id"))
  }

  ngOnInit(): void {
    this.dataServ.getDataAPI("products").subscribe(data => {
      for (const key in data) {
        if(data[key].id == this.id!)
        this.product=data[key]
      }
    })
  }

  addToCart(item: product) {
    let carts = this.dataServ.carts()
    if (!carts.find(ele => item.id == ele.id)) {
      this.dataServ.carts.update((items) => {
        items.push(item)
        return items
      })
    }
    if (localStorage.getItem("carts")!)
      localStorage.setItem("carts", JSON.stringify(this.dataServ.carts()))
    else
      localStorage.setItem("carts", JSON.stringify(this.dataServ.carts()))
  }

}
