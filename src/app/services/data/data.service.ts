import { EventEmitter, Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  topProductsList: Product[];

  preProductsList$ = new EventEmitter<Product[]>();

  productsList$ = new EventEmitter<Product[]>();
  productsList: Product[];

  productsListOffset: number = 0;
  productsListLimit: number = 20;

  searchKeyWords: string = '';

  searching: boolean = false;

  constructor(private apiService: ApiService) { }

  async getTopProducts() {
    this.topProductsList = await this.apiService.getProducts('busos', 12, 0);
    return this.topProductsList;
  }

  async emitPreProductsList(query: string) {

    await this.apiService.getProducts(query, 12, 0)
      .then(productList => {
        this.preProductsList$.emit(productList);

      })


  }

  async emitProductsList() {
    this.searching = true;


    await this.apiService.getProducts(this.searchKeyWords, this.productsListLimit, this.productsListOffset)
      .then(productList => {
        this.productsList = productList;
        this.productsList$.emit(this.productsList);
        this.increaseProductsListOffset();
        this.searching = false;

      })

    return this.productsList;

  }

  async getProductsList() {

    if ((this.productsListOffset + this.productsListLimit) < 1000) {
      this.searching = true;

      const productsList = await this.apiService.getProducts(this.searchKeyWords, this.productsListLimit, this.productsListOffset);
      this.increaseProductsListOffset();
      this.searching = false;

      return productsList;

    } else {
      return [];
    }

  }

  increaseProductsListOffset() {
    this.productsListOffset += this.productsListLimit;
  }

  resetProductsListOffset() {
    this.productsListOffset = 0;
  }

}
