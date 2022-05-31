import { environment } from './../../environments/environment';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IProduct } from './../Models/iproduct';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpOptions
  constructor(private _httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  //Handle Errors Method
  private handleErrors(err: HttpErrorResponse) {
    if (err.status == 0) { console.error(`something went wrong, ${err.error}`) }
    else { console.error(`server error, code: ${err.status}, body was: ${err.error}`) }
    return throwError(() => new Error('Something went wrong, Please try again later'))
  }

  getAllProducts(): Observable<IProduct[]> {
    return this._httpClient.get<IProduct[]>(`${environment.baseAPI}/products`)
    .pipe(
      retry(2),
      catchError(this.handleErrors)
    )
  }

  getProductsByCateID(cateID: number): Observable<IProduct[]> {
    if (cateID == 0 || cateID == null) {
      return this.getAllProducts()
    } else {
      return this._httpClient.get<IProduct[]>(`${environment.baseAPI}/products?CategoryID=${cateID}`)
      .pipe(
        retry(2),
        catchError(this.handleErrors)
      )
    }
  }

  getProductByID(prodID: number): Observable<IProduct> {
    return this._httpClient.get<IProduct>(`${environment.baseAPI}/products/${prodID}`)
    .pipe(
      retry(2),
      catchError(this.handleErrors)
    )
  }
  addProduct(newProd: IProduct): Observable<IProduct> {
    return this._httpClient
      .post<IProduct>(`${environment.baseAPI}/products`, JSON.stringify(newProd), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleErrors)
      )
  }

  updateProduct(id: number, updatedProd: IProduct) { }
  deleteProduct(id: number) { }
}
