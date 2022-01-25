import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kantar-app',
  // template:`<h1>Dharani</h1><try-root></try-root>
  //             <h3>{{ name }}</h3>`,
  // styles:[`h1{color:red}`],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'kantar-product-app';
  name='Dharu'
  first="https://picsum.photos/200/300";
  second="https://picsum.photos/200";
  imageUrl=this.first;
  div: any;

  
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
}
