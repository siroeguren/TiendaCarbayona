import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService
{
  productsUrl = "http://localhost:3000/products";

  constructor(private http: HttpClient)
  {

  }

  getProducts() : Observable<Product[]>
  {
    return this.http.get<Product[]>(this.productsUrl);
  }
}
