import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { carasouel } from '../interfaces/carasouel.interface';
import { product } from '../interfaces/product.interface';
import { social } from '../interfaces/social.interface';
import { ToastrService } from 'ngx-toastr';
import { Database } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient, private toastr: ToastrService, private database: Database) { }
  apiLink:string=this.database.app.options.databaseURL?.toString()!;
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

  //---------------------------------------------------------------------------------------------------------------------
  // -------------------------- note that update & delete is working in the Component.ts directly -----------------------
  getSocialAPI(socialtype: string): Observable<social[]> {
    return this.http.get<social[]>(`${this.apiLink}/${socialtype}.json`)
  }
  // --------------------- get data of social Links ---------------------
  returnSoical(social: string): social[] {
    let arr: social[] = [];
    this.getSocialAPI(social).subscribe(data => {
      for (const key in data) {
        arr.push(data[key]);
      }
    })
    return arr;
  }
  // --------------------------------------- update social media links ---------------------------------------
  updateWhatsapp(whats: any) {
    this.getSocialAPI("whatsapp").subscribe(data => {
      for (let key in data) {
        this.http.put(`${this.apiLink}/whatsapp/${key}.json`, whats).subscribe((data) => {
          this.toastr.success("تم تعديل الواتساب", "عملية ناجحة");
        })
      }
    })
  }
  updateSnapChat(snapchat: any) {
    this.getSocialAPI("snapchat").subscribe(data => {
      for (let key in data) {
        this.http.put(`${this.apiLink}/snapchat/${key}.json`, snapchat).subscribe((data) => {
          this.toastr.warning("تم تعديل سناب شات", "عملية ناجحة");
        })
      }
    })
  }
  updateInstagram(insta: any) {
    this.getSocialAPI("insta").subscribe(data => {
      for (let key in data) {
        this.http.put(`${this.apiLink}/insta/${key}.json`, insta).subscribe((data) => {
          this.toastr.error("تم تعديل الانستجرام", "عملية ناجحة");
        })
      }
    })
  }
}
