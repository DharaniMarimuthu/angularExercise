import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http'
const productUrl="http://localhost:3000/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(public httpClient:HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(productUrl);
  }

  deleteProduct(productId:number):Observable<any>{
    return this.httpClient.delete(productUrl+'/'+productId)
  }

  getProductsHardcoded(){
    return [{
      "productId":100,
      "productName":"Lakme",
      "quantityOnHand":100,
      "price":1000

    },
    {
      "productId":101,
      "productName":"Dairy Milk silk",
      "quantityOnHand":90,
      "price":60

    },
    {
      "productId":102,
      "productName":"Cycle",
      "quantityOnHand":70,
      "price":5000

    },
    {
      "productId":103,
      "productName":"Mobile",
      "quantityOnHand":300,
      "price":10000

    },
    {
      "productId":104,
      "productName":"Pen",
      "quantityOnHand":178,
      "price":100

    }]
  }
}
