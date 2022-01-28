import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[]=[];
  constructor( public productService:ProductService,public router:Router) { }
  deleteMessage ?:string;
  ngOnInit(): void {
    this.refreshProducts();

  }
  refreshProducts(){
    this.productService.getProducts().subscribe((data:any)=>{
      this.products=data;
    });
  }
  deleteProduct(productId: any){
    this.productService.deleteProduct(productId).subscribe((data=>{
      console.log(data);
      this.deleteMessage="Deleting product with id :"+productId
      this.refreshProducts();

      // this.productService.getProducts().subscribe((data:any)=>{
      //   this.products=data;
      // });
    }))
    

  }
  navigateToProductAdd(){
    //this.router.navigate(["productAdd"]);
    this.router.navigateByUrl("/productAdd")
  }

  editProduct(productId:any){
    this.router.navigate(["productEdit",productId])
  }
}
