import { ICategory } from './../../Models/icategory';
import { CategoryService } from './../../Services/category.service';
import { Router } from '@angular/router';
import { ProductsService } from './../../Services/products.service';
import { IProduct } from 'src/app/Models/iproduct';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  newProduct:IProduct = {} as IProduct
  
  cateList!:ICategory[]
  constructor(private _prodService:ProductsService, 
    private _router:Router,
    private _categoriesService:CategoryService) { }

  ngOnInit(): void {
    this._categoriesService.getProductsCate().subscribe({
      next :(data:ICategory[]) => {
        console.log(data)
        this.cateList = data
      },
      error :(err:Error) => {console.log(err.message)}
    })
  }


  addProduct(){
    // const prod:IProduct = {
    //   id:300,
    //   Name:'New Tablet',
    //   Price:550,
    //   Quantity:6,
    //   CategoryID:2,
    //   ImgURL:''
    // }

    this._prodService.addProduct(this.newProduct).subscribe({
      next:(data:IProduct) => {this._router.navigateByUrl('/Products')},
      error:(err:Error) => {console.log(err.message)}
    })

    //   data => {
    //   this._router.navigateByUrl('/Products')
    // })
  }
}
