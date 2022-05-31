import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _httpClient:HttpClient) { }

  getProductsCate():Observable<ICategory[]> {
    return this._httpClient.get<ICategory[]>(`${environment.baseAPI}/Categories`)
  }
}
