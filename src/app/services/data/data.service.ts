import { EventEmitter, Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  searchResultsProductList$ = new EventEmitter<Product[]>();

  resultBoxtsList$ = new EventEmitter<Product[]>();

  topProductsList: Product[];

  constructor() { }

  
}
