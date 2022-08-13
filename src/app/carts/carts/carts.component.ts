import { Component, OnInit } from '@angular/core';
import { ICart } from 'src/app/entities/cart.entity';
import { CartsService } from 'src/app/services/carts.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  carts : ICart[] = []; 
  constructor(private cartService : CartsService) { }

  ngOnInit(): void {
    this.cartService.Carts$.subscribe(cart =>{
      this.carts = cart; 
    })
  }
  removeFromCart(c:ICart){
    this.cartService.removeFromCart(c.Product.Id);
  }

}
