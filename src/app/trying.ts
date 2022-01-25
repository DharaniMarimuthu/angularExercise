import { Component } from "@angular/core";

@Component({
    selector:'try-root',
    // template:'<h2>TryComponent Works!</h2>'
    templateUrl:'./trying.html'
})

export class TryComponent{
    num1:any=0;
    num2:any=0;
    sum:any;
    
    add(num1: any=0,num2: any=0){
      this.sum= parseInt(num1)+parseInt(num2);
      }
}