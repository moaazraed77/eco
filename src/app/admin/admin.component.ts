import { Component } from '@angular/core';
import { Router } from '@angular/router';
import $ from 'jquery'
@Component({
  selector: 'app-admin',
  // standalone: true,
  // imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  typeOfDataFromParent:string="";
  constructor(private route : Router){}

  setAcitve(link:string){
    $(`#basic`).removeClass("active")
    $(`#men`).removeClass("active")
    $(`#women`).removeClass("active")
    $(`#kids`).removeClass("active")
    $(`#${link}`).addClass("active");
    this.route.navigate([`/admin/${link}`])
  }
  

  logout(){
    sessionStorage.removeItem("Admin");
    this.route.navigate(["/"])
  }
}
