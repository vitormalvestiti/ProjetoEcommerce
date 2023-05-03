import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Array<Product> = [];

  constructor() { }

  addItem(item: Product): void {
    this.items.push(item);
  }

  removeItem(item: Product): void {
    this.items = this.items.filter(i => i !== item);
  }

  clearCart(): void {
    this.items = [];
  }

  getItems(): Array<Product> {
    return this.items;
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}