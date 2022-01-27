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
  
  ngOnInit(){
    console.log("OnInit");
    
  }
}
