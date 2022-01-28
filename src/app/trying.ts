import { Component } from "@angular/core";

@Component({
    selector:'try-root',
    // template:'<h2>TryComponent Works!</h2>'
    templateUrl:'./trying.html',
    styleUrls:['./trying.css']
})

export class TryComponent{
    num1 =0;
    num2 =0;
    sum  =0;
    name='Dharu'
  first="https://picsum.photos/200/300";
  second="https://picsum.photos/200";
  imageUrl=this.first;
  div: any;
  clipboardText="Enter text to copy";
  
  userLogged=true;
  color='yellow'
  depts=["CSE","Hr","Finance"]
  ishidden=false;

  showDown=false;
  toggleOthers(){
    this.showDown=!this.showDown;
  }
  constructor(){
    console.log("Constructor");
    this.name="Dharani"
  }
 
  copyToClipboard(){
    navigator.clipboard.writeText(this.clipboardText);

  }
  hide(){
    this.ishidden=!this.ishidden;
  }

  changeName(){
    this.name=this.name=="Dharani"?"Ahmed":"Dharani";
    //this.imageUrl="https://i.picsum.photos/id/25/200/300.jpg?hmac=ScdLbPfGd_kI3MUHvJUb12Fsg1meDQEaHY_mM613BVM"
  }
  changeImage(){
    this.imageUrl=this.imageUrl==this.first?this.second:this.first;
  }
  ngOnInit(){
    console.log("OnInit");
    this.name="Ahmed";
    
  }
  overDiv(){
    this.div=document.querySelector('div');
    //document.querySelector('div').innerHTML=``;
    //document.querySelector('div').innerText="Dharani"
    console.log(this.div);
    

  }
    add(num1: any=0,num2: any=0){
      this.sum= parseInt(num1)+parseInt(num2);
      }
}