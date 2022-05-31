import { IProduct } from './../Models/iproduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {

  private proList: IProduct[]
  constructor() {
    this.proList = [
      { id: 100, Name: 'Lenovo', Price: 500, Quantity: 1, ImgURL: 'https://fakeimg.pl/250x100/', CategoryID: 1 },
      { id: 200, Name: 'Dell', Price: 600, Quantity: 0, ImgURL: 'https://fakeimg.pl/250x100/', CategoryID: 1 },
      { id: 300, Name: 'Apple', Price: 700, Quantity: 10, ImgURL: 'https://fakeimg.pl/250x100/', CategoryID: 2 },
      { id: 400, Name: 'Lenovo Tab', Price: 900, Quantity: 2, ImgURL: 'https://fakeimg.pl/250x100/', CategoryID: 2 },
      { id: 500, Name: 'Samsung', Price: 1000, Quantity: 9, ImgURL: 'https://fakeimg.pl/250x100/', CategoryID: 3 },
      { id: 600, Name: 'Huawei', Price: 2000, Quantity: 1, ImgURL: 'https://fakeimg.pl/250x100/', CategoryID: 3 }
    ]
  }

  getAllProducts(): IProduct[] {
    return this.proList;
  }

  getProductsByCatID(id: number): IProduct[] {
    if (id == 0) {
      return this.proList
    } else {
      return this.proList.filter(el => el.CategoryID == id)
    }
  }

  getProductByID(prodID: number): IProduct | null {
    let foundedProduct = this.proList.find(element => element.id == prodID)
    return foundedProduct ? foundedProduct : null
  }

  getProductByMaxPrice(price: number): IProduct[] {
    if (price == 0 || price == null) {
      return this.proList
    } else {
      return this.proList.filter(ele => ele.Price < price)
    }
  }

  getProductsIDs(): number[]{
    let prdIDS :number[] = this.proList.map(el => el.id)
    return prdIDS
  }

}
