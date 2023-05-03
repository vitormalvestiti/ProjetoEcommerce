import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Array<Product> = [];
  total: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  removeItem(item: Product): void {
    this.cartService.removeItem(item);
    this.cartItems = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

}













