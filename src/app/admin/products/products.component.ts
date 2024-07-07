import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Validators, FormArray, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../modules/services/data.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { product } from '../../modules/interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/compat/storage';  // write this special code for upload img 
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule,LoadingComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss','../../modules/styles/admin.style.css']
})
export class ProductsComponent {
  // -------------------------------- variables of the website ----------------------------
  // important arrays 
  photosPromo: any[] = [];
  photosFiles: File[] = [];
  photosSize: number[] = [];
  productsall: product[] = [];
  products: product[] = [];
  // brands: string[] = ["Dior", "Gucci", "Prada", "Armani", "Louis Vuitton", "Hermes", "Burberry", "Ralph Lauren", "Balenciaga", "Fendi", "Rolex", "Saint Laurent", 'Versace', "Dolce&Gabbana", "Givenchy", "Valentino", "Balmain", "Bvlgari", "Cartier", "Swarovski", "Bottega Veneta", "Coach", "Michael Kors", "Chanel", "Moncler", "AMIRI", "others"].sort();
  numberOfImages!: number;
  control: string = "add-product";
  globalProduct: product = {} as product;
  globalKey: string = "";
  productsFilter: any = "";
  uploading:boolean=false;
  loading: boolean = false;

  @Input() typeOfDataFromParent: string = "";

  // product input
  product = this.formBuilder.group({
    id: [new Date().getTime(),],
    type: ["", Validators.required],
    department: ["", Validators.required],
    // brand: ["", Validators.required],
    title: ["", Validators.required],
    productType: ["", Validators.required],
    details: ["", Validators.required],
    prePrice: [0, Validators.required],
    price: [0, Validators.required],
    productImages: this.formBuilder.array([])
  })
  get images() {
    return this.product.get("productImages") as FormArray
  }
  // ----------------------------------------------------------------------------------------------------

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService,
    private dataServ: DataService, private firestorage: AngularFireStorage, private http: HttpClient) { }

  // to set the data depending on the choice from parent
  ngOnChanges() {
    this.products = [];
    this.photosPromo = [];
    this.loading=true;
    this.dataServ.getDataAPI(this.productsFilter).subscribe((data) => {
      for (const key in data) {
        this.products.push(data[key])
        this.productsall.push(data[key])
      }
      this.loading=false
    })
  }
  filter(){
    this.products = this.productsall.filter(item => item.department == this.productsFilter)
  }
  //empty product for adding 
  emptyProuct() {
    this.productsFilter=""
    this.photosPromo = []
    this.product.patchValue({
      id: 0,
      type: "",
      department: "",
      // brand: "",
      title: "",
      details: "",
      productType: "",
      prePrice: 0,
      price: 0,
    })
    this.emptyProductImages() // empty product images array
  }
  // empty product images for a new adding     or    editing peice of product 
  emptyProductImages() {
    for (let i in this.images) { // delete all the images
      this.images.removeAt(0);
    }
    this.photosPromo = []
  }
  // empty department when type changes
  emptyDep() {
    this.product.patchValue({
      department: ''
    })
  }

  // ------------------------------------------ uploading product ------------------------------------------
  // promo upload to show which files uploaded and the size of each photo
  upload(event: any) {
    const files = event.target.files;
    this.photosSize = [];  // array for identify the big files
    this.photosPromo = [];
    this.photosFiles = [];
    for (let i = 0; i < event.target.files.length; i++) {
      let loader = new FileReader();
      // if (event.target.files[i].size / 1024 > 30) // to  fill  the photosSize array  with  the  huge images  
      //   this.photosSize.push(i + 1) // to  fill  the photosSize array  with  the  huge images  
      loader.readAsDataURL(event.target.files[i])
      this.photosFiles.push(event.target.files[i]) // adding file in the array
      loader.onload = (event) => {
        this.photosPromo.push(event.target?.result);  // show the photos before uploading
      }
    }
  }
  /// ----------- uploading files & products on firebase -----------
  async activeUpload() {
    this.uploading=true;
    this.toastr.info("يتم رفع  تفاصيل المنتج حاليا")
    for (let i = 0; i < this.photosFiles.length; i++) {
      const path = `ecommerce/${new Date().getTime()}${this.photosFiles[i].name}`; // we make name of file in firebase storage 
      const uploadTask = await this.firestorage.upload(path, this.photosFiles[i])
      const url = await uploadTask.ref.getDownloadURL().then()
      // create a form-group to save image link in it --- and push the image in the array of upoaded images
      let uploadImage = this.formBuilder.group({
        img: url
      })
      this.images.push(uploadImage) // form array - only push a FormGroup object 
    }
    this.photosFiles = []
    this.uploading=false
  }

  // ------------------------------------------ add product ------------------------------------------
  // --------- sending the data to firebase backend ---------
  submit() {
    if ((this.product.get("prePrice")?.value! > this.product.get("price")?.value! || this.product.get("department")?.value! != "occasion") &&
    // && this.product.get("brand")?.value != ''
      this.product.get("price")?.value! > 0 && this.product.get("type")?.value != ''  &&
      this.product.get("department")?.value != '' && this.product.get("title")?.value != '' && this.photosPromo.length > 0) {
      // if (this.control == "add-product"  || (this.control=="edit-product" && this.product.get("type")?.value != this.globalProduct.type ) ) {
      if (this.control == "add-product") {
        this.product.patchValue({
          id: new Date().getTime(),
        })
        this.activeUpload().then(() => {
          this.dataServ.createe('', "add-product", this.product.value)
          this.emptyProuct();
        })
      }// --------- for editing the products ---------
      else if (this.control == "edit-product") {
        // if there are a new uploads 
        if (this.photosFiles.length != 0) {
          this.emptyProductImages()
          this.activeUpload().then(() => {
            this.dataServ.createe(this.globalKey, "edit-product", this.product.value)
            this.emptyProuct();
          })
          this.deleteImagesFromFireStorage() // to remove all the images which are being stored in the firebase storage
          // if there is no any new uploads the website will set the same photos
        } else {
          this.dataServ.createe(this.globalKey, "edit-product", this.product.value)
          this.emptyProuct();
        }
      }
    } else {
      this.toastr.error("راجع بيانات المنتج")
    }
  }

  // ------------------------------------------ edit product ------------------------------------------
  edit(item: product) {
    this.photosPromo = [];
    this.emptyProductImages(); // empty product images array
    this.product.patchValue({
      id: item.id,
      type: item.type,
      department: item.department,
      // brand: item.brand,
      title: item.title,
      details: item.details,
      prePrice: item.prePrice,
      price: item.price,
    })
    // for showing it on form and set the photos 
    for (const temp of item.productImages) {
      let uploadImage = this.formBuilder.group({
        img: temp.img
      })
      this.images.push(uploadImage)
      this.photosPromo.push(temp.img) // for showing it on the form
    }
    this.getItem(item)
  }

  // ------------------------------------------ delete product ------------------------------------------
  getItem(item: product) {
    this.globalProduct = item;
    this.dataServ.getDataAPI(this.globalProduct.department).subscribe(data => {
      for (const key in data) {
        if (this.globalProduct.id == data[key].id) {
          this.globalKey = key;
          break;
        }
      }
    })
  }
  //  ----------------------  for the active delete from database server ---------------------
  deleteProd() {
    this.toastr.info("يتم حذف المنتج حاليا")
    /* this variable for identify which data will be edit */
    this.http.delete(`${this.dataServ.apiLink}/products/${this.globalKey}.json`).subscribe((data) => {
      this.toastr.success("تم حذف المنتج", "");
      this.ngOnChanges()
    })
    this.deleteImagesFromFireStorage()
  }
  // to remove all the images which are being stored in the firebase storage
  deleteImagesFromFireStorage() {
    for (const temp in this.globalProduct.productImages) {
      this.firestorage.storage.refFromURL(this.globalProduct.productImages[temp].img).delete()
    }
  }
  // --------------------------------------------------------------------------------

}
