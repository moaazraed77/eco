import { Component, effect } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../../modules/services/data.service';
import { Router, RouterModule } from '@angular/router';
import { product } from '../../modules/interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-buy-cart-detais',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './buy-cart-detais.component.html',
  styleUrl: './buy-cart-detais.component.scss'
})
export class BuyCartDetaisComponent {


  // reducers=inject(Store)
  subscriptions: Subscription[] = [];
  favourits = this.dataServ.favourits;
  carts = this.dataServ.carts;
  counts: number[] = [];
  totalPrice: number = 0;
  userData = this.formBuilder.group({
    id: [new Date().getTime()],
    name: ["", Validators.required],
    email: ["", [Validators.required,Validators.email]],
    phone: ["", Validators.required],
    address: ["", Validators.required],
  })
  constructor(private route: Router, private dataServ: DataService, private formBuilder: FormBuilder, private toastr: ToastrService) {
    this.dataServ.carts.set(JSON.parse(localStorage.getItem("carts")!))
    effect(() => {
      this.dataServ.carts.set(JSON.parse(localStorage.getItem("carts")!));
    })
    for (const iterator of JSON.parse(localStorage.getItem("carts")!)) {
      this.counts.push(1)
    }
    this.countTotalPrice()
  }
  // Add To Cart
  addToCart(item: product) {
    let carts = this.dataServ.carts()
    if (!carts.find(ele => item.id == ele.id)) {
      this.dataServ.carts.update((items) => {
        items.push(item)
        return items
      })
    }
    localStorage.setItem("carts", JSON.stringify(this.dataServ.carts()))
  }

  // Count price for each product
  countProducts(count: number, index: number) {
    if (count > 0)
      this.counts[index] = this.counts[index] + count
    else
      this.counts[index] = this.counts[index] > 1 ? this.counts[index] + count : this.counts[index]
    this.countTotalPrice()
  }
  // Count Total Price
  countTotalPrice() {
    this.totalPrice = 0;
    for (let i = 0; i < this.carts().length; i++) {
      this.totalPrice += this.carts()[i].price * this.counts[i]
    }
  }

  submit() {
    if (this.userData.valid)
      this.dataServ.buyCarts(this.userData.value, this.carts(), this.counts, this.totalPrice)
    else
      this.toastr.error("يرجي اكمل بياناتك ")
  }
  // Delete Product
  deleteProduct(item: product) {
    let carts = this.dataServ.carts();
    this.dataServ.carts.update((items) => {
      items.splice(carts.indexOf(item), 1)
      return items
    })
    localStorage.setItem("carts", JSON.stringify(this.dataServ.carts()))
  }





}
