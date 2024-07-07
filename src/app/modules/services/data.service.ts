import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { carasouel } from '../interfaces/carasouel.interface';
import { product } from '../interfaces/product.interface';
import { social } from '../interfaces/social.interface';
import { ToastrService } from 'ngx-toastr';
import { Database } from '@angular/fire/database';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  favourits = signal<product[]>([])
  carts = signal<product[]>([])

  constructor(private http: HttpClient, private toastr: ToastrService, private database: Database) { }
  apiLink: string = this.database.app.options.databaseURL?.toString()!;
  // get data from API
  getDataAPI(type: string): Observable<product[]> {
    return this.http.get<product[]>(`${this.apiLink}/products.json`)
  }
  // get pages carasouel from API
  getpagesCarasouelAPI(type: string): Observable<carasouel[]> {
    return this.http.get<carasouel[]>(`${this.apiLink}/${type}.json`)
  }
  // get pages content from API
  getpagesContentAPI(type: string): Observable<any[]> {
    return this.http.get<product[]>(`${this.apiLink}/${type}.json`)
  }

  // create and update data products
  createe(key: string, action: string, product: any) {
    if (action == "add-product" && product.department != "" && product.department != " " && product.department != undefined && product.department != null) {
      this.http.post(`${this.apiLink}/products.json`, product).subscribe((data) => {
        this.toastr.success("تم اضافة المنتج", "عملية ناجحة");
        this.http.post(`${this.apiLink}/products-copy.json`, product).subscribe()
      })
    } else if (action != "add-product" && product.department != "" && product.department != " " && product.department != undefined && product.department != null && key != "" && key != " " && key != undefined && key != null) {
      this.http.put(`${this.apiLink}/products/${key}.json`, product).subscribe((data) => {
        this.toastr.success("تم تعديل المنتج", "عملية ناجحة");
      })
    } else {
      location.reload();
    }
  }

  buyProduct(data: any) {
    this.http.post(`${this.apiLink}/buy.json`, data).subscribe((data) => {
      this.toastr.success("تم الطلب ", "عملية ناجحة");
    })
  }
  //  --------------- create and update photos-carasouel ---------------
  // createCarasouel(key: string, action: string, type: string, data: any) {
  //   if (action == "add-carasouel" && type != "" && type != " " && type != undefined && type != null) {
  //     this.http.post(`${this.apiLink}/${type}.json`, data).subscribe((data) => {
  //       this.toastr.success("تم اضافة الصورة", "عملية ناجحة");
  //     })
  //   } else if (type != "" && type != " " && type != undefined && type != null && key != "" && key != " " && key != undefined && key != null) {
  //     this.http.put(`${this.apiLink}/${type}/${key}.json`, data).subscribe((data) => {
  //       this.toastr.warning("تم تعديل الصورة", "عملية ناجحة");
  //     })
  //   }
  // }
  //  --------------- update pages data ---------------
  updatePagesTitle(item: any) {
    this.getDataAPI("pagesTitles").subscribe(data => {
      for (const key in data) {
        if (data[key].id == item.id)
          this.http.put(`${this.apiLink}/pagesTitles/${key}.json`, item).subscribe(() => {
            this.toastr.warning("تم تعديل العناوين", "عملية ناجحة");
          })
      }
    })
  }
  // delete data
  del(type: string, key: string) {
    return this.http.delete(`${this.apiLink}/${type}/${key}.json`).subscribe((data) => {
      this.toastr.success("تم حذف الصورة", "عملية ناجحة");
    })
  }

  // -------------------------- favourites ------------------------
  setFavourite(item: product) {
    let favs: product[] = [];
    favs = JSON.parse(localStorage.getItem("Favourites")!)
    favs.push(item)
    localStorage.setItem("Favourites", JSON.stringify(favs))
  }


  // -------------------------- data buy carts ------------------------ 
  async buyCarts(userData: any, carts: any , counts:number[] ,totalPrice : number) {
    let zoblot: any = { "userData": userData, "carts": carts }, isRequsetedBefore = false;;
    this.toastr.info("جاري ارسال الطلب","يرجي الانتظار")

    this.getBuyRequests().subscribe(data => {

      for (const key in data) {
        if (data[key].userData.id == userData.id) {
          isRequsetedBefore = true;
          break;
        }
      }

      if (!isRequsetedBefore)
        this.http.post(`${this.apiLink}/buy.json`, zoblot).subscribe((data) => {
          this.toastr.success("تم الطلب ", "عملية ناجحة");
          let msg = "";

for (let i = 0 ; i < carts.length ; i++) {
msg += `
Title : ${carts[i].title} \n
Details : ${carts[i].details} \n
Price : ${carts[i].price} \n
Quantity : ${counts[i]} \n
Product Image : ${carts[i].productImages[0].img} \n
-------------------------------------- \n 
`
}
// sending email 
emailjs.init("3C9NauxvHZWATM3At")
emailjs.send("service_m5i1rqe","template_2ge3ct9",{
from_name: userData.name,
from_email: userData.email,
to_name: "Alshaya Group",
to_email : "mohsenjjyu@gmail.com",
message: `
this customer need these products ,\n
${msg} \n
Toatal Price : ${totalPrice} \n
`,
reply_to: "Alshaya Group",
request_id: userData.id,
phone: userData.phone,
});
// ------------------------------------------------------
emailjs.send("service_m5i1rqe","template_2ge3ct9",{
  from_name : "Alshaya Group",
  from_email  : "mohsenjjyu@gmail.com",
  to_name: userData.name,
  to_email: userData.email,
  message: `
  this customer need these products ,\n
  ${msg} \n
  Toatal Price : ${totalPrice} \n
  `,
  reply_to: "Alshaya Group",
  request_id: userData.id,
  phone: userData.phone,
  });
})
      else {
        this.toastr.error("تم هذا طلب المنتج من قبل")
        this.toastr.error("اعد تحميل الصفحة مرة اخري")
      }
    })
  }

  getBuyRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiLink}/buy.json`)
  }

  deleteBuyRequest(id: number) {
    this.getBuyRequests().subscribe(data => {
      for (const key in data) {
        if (data[key].id == id) {
          this.http.delete(`${this.apiLink}/buy/${key}.json`).subscribe()
          break;
        }
      }
      location.reload()
    })
  }
}
