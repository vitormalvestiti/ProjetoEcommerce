import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Array<Product> | undefined;


  constructor(private api: ProductsService, private cartService: CartService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void{
    this.api.getProductsByCategory().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product: Product): void {
    this.cartService.addItem(product);
    this._snackBar.open('1 item foi adicionado ao carrinho.', 'Ok', { duration: 3000 });
  }

}
