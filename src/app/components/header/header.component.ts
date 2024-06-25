import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit,OnDestroy {

  subscriptions:Subscription[]=[]

  constructor(private route:Router){}

  color:string="dark";

  // NAvToggleIcon:string

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.events.subscribe(link=>{
        if(link instanceof NavigationEnd){
          let linkLength=link.url.split("/").length;
          if(link.url.split("/")[linkLength-1]==""){
            this.color="light";
          }else{
            this.color="dark";
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

  number:number=0;
  number2:number=0;
}
