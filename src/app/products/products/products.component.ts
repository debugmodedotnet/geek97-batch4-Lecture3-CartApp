import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/entities/product.entity';
import { CartsService } from 'src/app/services/carts.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products? : IProduct[]; 
  @Output() showCartEvent = new EventEmitter<boolean>();
  constructor(private productService : ProductsService, private cartService : CartsService) { }

  ngOnInit(): void {
    this.productService.products$?.subscribe(
      (products:any)=>{
        this.products = products; 
      }
    )
  }

  addToCart(p:IProduct):void{
     console.log('cart', p);
    // this.showCartEvent.emit(true);
     this.cartService.addToCart(p);
     
  }

}
