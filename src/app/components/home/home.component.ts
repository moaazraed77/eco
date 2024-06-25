import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { customOptions, customOptions2 } from '../../modules/owl-carasouel/owl-carasouel';
import { RouterModule } from '@angular/router';
import { DataService } from '../../modules/services/data.service';
import { product } from '../../modules/interfaces/product.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  customOptions: any = customOptions;
  customOptions2: any = customOptions2;

  productsBasic:product[]=[]
  productsOccasion:product[]=[]

  constructor(private dataServ:DataService){}

  ngOnInit(): void {
    this.dataServ.getDataAPI("").subscribe(data=>{
      for (const key in data) {
        if(data[key].department=="basic")
        this.productsBasic.push(data[key])
      }
    })
    this.dataServ.getDataAPI("").subscribe(data=>{
      for (const key in data) 
        if(data[key].department=="occasion")
        this.productsOccasion.push(data[key])
    })
  }



}
