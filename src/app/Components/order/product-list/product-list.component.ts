import { ProductsService } from './../../../Services/products.service';
import { StaticProductsService } from './../../../Services/static-products.service';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnChanges {
  //productList:IProduct[]
  productListofCategory!:IProduct[]
  productListOfMaxPrice!:IProduct[]
  orderTotalPrice:number = 0

  @Input() maxPrice!:number
  @Input() sentCateID!:number
  @Output() totalPriceChanged:EventEmitter<number>
  orderDate:Date

  constructor(private _ProdService:ProductsService, 
    private router:Router) {
    this.totalPriceChanged = new EventEmitter<number>()
    this.orderDate = new Date()
  }

  ngOnChanges(): void {
    this._ProdService.getProductsByCateID(this.sentCateID).subscribe({
      next:(data) =>{
        this.productListofCategory = data
      },
      error:(err:Error) => {console.log(err.message)}
    })

    this._ProdService.getAllProducts().subscribe({
      next:(data) => {
        if(this.maxPrice == 0 || this.maxPrice == null){
          this.productListOfMaxPrice = data
        }else{
          this.productListOfMaxPrice = data.filter(el => el.Price < this.maxPrice)
        }
      }
    })   



    // this.productListofCategory = this._staticProdService.getProductByMaxPrice(this.maxPrice)
    // this.productListofCategory = this._staticProdService.getProductsByCatID(this.sentCateID)
    // this.filterProdByID()
    // this.maxPriceBySearch()
  }

  ngOnInit(): void {
    this._ProdService.getAllProducts().subscribe({
      next:(data) => {
        this.productListofCategory = data
        console.log(this.productListofCategory)
      },
      error:(err:Error) => {console.log(err.message)}
    })
    // this.productListofCategory = this._staticProdService.getAllProducts()
  }

  buy(prodPrice:number, count:string){
    this.orderTotalPrice += parseInt(count) * prodPrice
    this.totalPriceChanged.emit(this.orderTotalPrice)
  }
  prodDetails(id:number){
    this.router.navigate(['/Products',id])
  }
  prodTrackByID(index:number, product:IProduct):number{ //Preformance
    return product.id
  }
}
