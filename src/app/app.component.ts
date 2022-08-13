import { Component, OnInit } from '@angular/core';
import { CartsService } from './services/carts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lecture3-cart-app';
  showCart = false; 

  constructor(private cartservice : CartsService){

  }

  ngOnInit(): void {
    this.cartservice.Carts$.subscribe(
      data =>{
        if(data.length >= 1){
          this.showCart = true; 
        }
        else {
          this.showCart = false; 
        }
      }
    )
  }

  // showCartF(d: any){
  //   alert("hey");
  //   this.showCart = d; 
  // }
}
