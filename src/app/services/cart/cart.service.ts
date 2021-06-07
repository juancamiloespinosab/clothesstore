import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Product } from 'src/app/interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProductsList: Product[] = [];

  constructor(private domSanitizer: DomSanitizer) { }

  addToCart(product) {

    this.cartProductsList.push(product);

    this.updateCartCount();
  }

  updateCartCount() {
    document.documentElement.style.setProperty('--products-in-cart', `'${this.cartProductsList.length}'`);
  }
}
