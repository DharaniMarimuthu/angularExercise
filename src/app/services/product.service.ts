import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http'
const productUrl="http://localhost:3000/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(public httpClient:HttpClient) { }

  //get all products
  getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(productUrl);
  }

  //delete single product
  deleteProduct(productId:number):Observable<any>{
    // return this.httpClient.delete(productUrl+'/'+productId)
    return this.httpClient.delete(`${productUrl}/${productId}`);
  }

  //getting a single product
  getProduct(productId:number):Observable<any>{
    // return this.httpClient.delete(productUrl+'/'+productId)
    return this.httpClient.get<Product>(`${productUrl}/${productId}`);
  }

  //saving a single record
  saveProduct(product:Product):Observable<Product>{
    return this.httpClient.post(productUrl,product,this.httpOptions);
  }

  //update a product
  updateProduct(product:Product,productId:number):Observable<Product>{
    return this.httpClient.put(`${productUrl}/${productId}`,product,this.httpOptions)
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
