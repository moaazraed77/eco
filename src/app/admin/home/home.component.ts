import { Component } from '@angular/core';
import { aboutus } from '../../modules/interfaces/aboutus.interface';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../modules/services/data.service';
import { AboutusService } from '../../modules/services/aboutus.service';
import { CommonModule } from '@angular/common';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../modules/styles/admin.style.css']
})
export class HomeComponent {
  // variables for control view and data 
  mainControl: string = "showData";
  // variables for data 
  about = this.formBuilder.group({
    text: ["", Validators.required],
    id: [new Date().getTime()]
  })
  background = this.formBuilder.group({
    img: ["", Validators.required],
    id: [new Date().getTime()]
  })
  uploadingImg:string="";
  listArray: aboutus[] = []; // for showing the data
  backgrounds: any[] = []; // for showing the data
  // item key in database
  globalKey: string = "";
  globalObject: any;

  constructor(private formBuilder: FormBuilder, private dataServ: AboutusService,
     private fireStorage:AngularFireStorage, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getData()
  }

  // ------------------------------------- uploading File ---------------------------------------
  async upload(event:any){
    this.uploadingImg="uploadingImg";
    this.toastr.info("uploading")
      this.fireStorage.storage.refFromURL(this.backgrounds[0].img).delete()
      const file=event.target.files[0];
    if(file){
      const path=`DEALZUS/${new Date().getTime()}${file.name}`; // we make name of file in firebase storage 
      const uploadTask = await this.fireStorage.upload(path,file)
      const url =await uploadTask.ref.getDownloadURL()
      this.background.patchValue({
        img:url
      })
    }
    this.dataServ.createBackground(this.background.value).subscribe(()=>{
      this.getData();
    })
    this.uploadingImg="imgUploaded";
    this.toastr.success("uploaded successfully")
  }
  // -------------------------------------- resetView ----------------------------------
  resetView() {
    this.about.patchValue({
      id: new Date().getTime(),
      text: ""
    })
  }

  // -------------------------------------- getData ----------------------------------
  getData() {
    this.listArray = [];
    this.backgrounds = [];
    this.dataServ.getdata("aboutus").subscribe(data => {
      for (const key in data) {
        this.listArray.push(data[key])
      }
    })
    this.dataServ.getdata("background").subscribe(data => {
      for (const key in data) {
        this.backgrounds.push(data[key])
      }
    })
  }

  submit() {
    if (this.mainControl == "add") {
      this.dataServ.create(this.about.value, "", this.mainControl).subscribe(() => {
        this.getData()
        this.mainControl = "showData";
        this.resetView()
      })
    } else {
      this.about.patchValue({
        id: this.globalObject.id
      })
      if (this.about.valid)
        this.dataServ.create(this.about.value, this.globalKey, this.mainControl).subscribe(() => {
          this.getData()
          this.mainControl = "showData";
          this.resetView()
        })
    }
  }

  // -------------------------- find item for Edit or Delete ------------------------
  findItem(item: any) {
    this.globalObject = item;
    this.about.patchValue({
      id: item.id,
      text: item.text
    })
    this.dataServ.getdata("aboutus").subscribe((data): any => {
      for (const key in data) {
        if (item.id == data[key].id) {
          this.globalKey = key;
          break;
        }
      }
    })
  }
  //---------------------------------------------

  // --------- to impelement the deletion ---------
  deleteTheItem() {
    this.dataServ.delete("about", this.globalKey).subscribe(() => {
      this.getData()
      this.mainControl = "showData";
    })
  }
}
