import { IProduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from './../../../Services/static-products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  prodDetails:number = 0
  prd :IProduct | null = null
  prdIDs :number[] = []
  // currentIndex!:number

  constructor(private activatedRoute:ActivatedRoute,
        private _prdService:StaticProductsService,
        private _router:Router, private _location:Location) { }

  ngOnInit(): void {
    // this.prodDetails = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.prdIDs = this._prdService.getProductsIDs()


    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.prodDetails = Number(paramMap.get('id'))
      this.prd = this._prdService.getProductByID(this.prodDetails)
    })
  }

  goBack(){
    // this._router.navigateByUrl('/Products')
    //OR
    this._location.back() //Best Practice
  }

  prev(){

    let currentIndex = this.prdIDs.findIndex(el => el == this.prodDetails)
    console.log(currentIndex)
    if(currentIndex > 0) {
      let prevIndex = this.prdIDs[currentIndex -1]
      this._router.navigate(['/Products', prevIndex])
    }

  }
  next(){
    let currentIndex = this.prdIDs.findIndex(el => el == this.prodDetails)
    console.log(currentIndex)
    if(currentIndex < this.prdIDs.length) {
      let nextIndex = this.prdIDs[currentIndex +1]
      this._router.navigate(['/Products', nextIndex])
    }
  }
}
