import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(public productService:ProductService,public router:Router,public activatedRoute:ActivatedRoute) { }
  routeProductId=-1;
  productForm?:FormGroup;
  ngOnInit(): void {
    this.routeProductId=this.activatedRoute.snapshot.params['productId'];
    console.log(this.activatedRoute);
    
    this.productForm= new FormGroup({
      productId:new FormControl(this.routeProductId,Validators.required),
      productName:new FormControl('',[Validators.required,Validators.minLength(4)]),
      quantityOnHand:new FormControl('',[Validators.required,Validators.min(10)]),
      price:new FormControl('',[Validators.required,Validators.min(100)]),
  
    });
  }


  isValid():boolean{
    if(this.productForm?.get('productId')?.hasError('required'))
    {
      return true;
    }
    return false;
  }
  saveProduct(){
    console.log(this.productForm?.value);
    this.productService.saveProduct(this.productForm.value).subscribe(data=>{
      window.alert(`Product ${this.productForm.value.productName} Added Successfully`);
      this.router.navigate(['productList']);
    })
  }

}
