import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
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
    console.log(this.router);
    
    
    this.productForm= new FormGroup({
      productId:new FormControl(this.routeProductId,Validators.required),
      productName:new FormControl('',[Validators.required,Validators.minLength(4)]),
      quantityOnHand:new FormControl('',[Validators.required,Validators.min(10)]),
      price:new FormControl('',[Validators.required,Validators.min(100)]),
  
    });
    console.log(this.productForm);
    
    this.checkEditRoute();
  }

  checkEditRoute(){
    let pattern=/productEdit/
       if( !pattern.test(this.activatedRoute.snapshot.routeConfig.path))
       {
         console.log("save");
         console.log(this.routeProductId);
         this.routeProductId=-1;

        //  this.productForm.patchValue({
        //    productId:
        //  })
       }
       else{
        //this.routeProductId=-1;
        this.productForm.controls['productId'].disable();
        this.productService.getProduct(this.routeProductId).subscribe((data:Product)=>{
          this.productForm.patchValue({
            productId:data.productId,
            productName:data.productName,
            quantityOnHand:data.quantityOnHand,
            price:data.price

            
          })
          // this.productForm= new FormGroup({
          //   productId:new FormControl(this.routeProductId,Validators.required),
          //   productName:new FormControl('',[Validators.required,Validators.minLength(4)]),
          //   quantityOnHand:new FormControl('',[Validators.required,Validators.min(10)]),
          //   price:new FormControl('',[Validators.required,Validators.min(100)]),
        
          // });
        })
       }
  }

  isValid():boolean{
    if(this.productForm?.get('productId')?.hasError('required'))
    {
      return true;
    }
    return false;
  }
  saveEditProduct(){
    console.log(this.productForm?.value);
    if(this.routeProductId==-1){
    this.productService.saveProduct(this.productForm.value).subscribe(data=>{
      window.alert(`Product ${this.productForm.value.productName} Added Successfully`);
      this.router.navigate(['productList']);
    })
  }
  else{
    this.productService.updateProduct(this.productForm.value,this.routeProductId).subscribe(data=>
      {
        window.alert(`Product ${this.productForm.value.productName} Edited Successfully`);
        this.router.navigate(['productList']);
      })
  }
  }

}
