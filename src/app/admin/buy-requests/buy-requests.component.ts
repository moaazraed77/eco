import { Component, OnInit } from '@angular/core';
import { DataService } from '../../modules/services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buy-requests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buy-requests.component.html',
  styleUrl: './buy-requests.component.scss'
})
export class BuyRequestsComponent implements OnInit {

  constructor(private dataServ:DataService){}

  buyData:any[]=[]
  showItem:any = ""
  
  ngOnInit(): void {
    this.dataServ.getBuyRequests().subscribe(data=>{
      for (const key in data) {
        console.log(data[key])
        this.buyData.push(data[key])
      }
    })
  }

  deleteItem(id:number){
    this.dataServ.deleteBuyRequest(id)
  }

}
