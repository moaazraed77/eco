import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { product } from '../../modules/interfaces/product.interface';
import { DataService } from '../../modules/services/data.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products:product[]=[]
  constructor(private dataServ:DataService){}

  ngOnInit(): void {
    this.dataServ.getDataAPI("").subscribe(data=>{
      for (const key in data) {
        this.products.push(data[key])
      }
    })
  }

}
