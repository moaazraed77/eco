import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutusService {
  databaseURL: any = "";

  constructor(private http: HttpClient, private database: Database) {
    this.databaseURL = this.database.app.options.databaseURL?.toString()!;
  }

  getdata(position: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.databaseURL}/${position}.json`)
  }

  // ---------------------------- create data ----------------------------
  create(data: any, key: string, typeOfAction: string) {
    if (typeOfAction == "add") {
      return this.http.post(`${this.databaseURL}/aboutus.json`, data)
    } else if (key != "" && key != " " && key) {
      return this.http.put(`${this.databaseURL}/aboutus/${key}.json`, data)
    } else {
      location.reload()
      return this.http.put(`${this.databaseURL}/error.json`, data);
    }
  }

  // ---------------------------- delete data ----------------------------
  delete(position: string, key: string) {
    if (position != "" && position != " " && position && key != "" && key != " " && key)
      return this.http.delete(`${this.databaseURL}/aboutus/${key}.json`)
    else
      return this.http.delete(`${this.databaseURL}/error.json`)
  }


  createBackground(data:any){
    return this.http.put(`${this.databaseURL}/background/-O0JtQ6uAIz2yNrluvvF.json`, data)
  }
}
