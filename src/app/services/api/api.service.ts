import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { Product } from 'src/app/interfaces/Product';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  calculateDiscountPercentage(price, originalPrice) {
    return Math.round(100 - ((price * 100) / originalPrice));
  }

  async getProducts(): Promise<Product[]> {
    let productList: Product[];

    const url = 'https://api.mercadolibre.com/sites/MCO/search?category=MCO1430&q=camisas&limit=12';
    await this.http.get<any>(url)
      .pipe(
        map(
          resp => resp.results.map(
            item => {
              return {
                id: item.id,
                title: item.title,
                price: item.price,
                original_price: item.original_price,
                thumbnail: item.thumbnail,
                discount: item.original_price == null ? 0 : this.calculateDiscountPercentage(item.price, item.original_price)
              }
            }
          )

        )
      ).toPromise()
      .then(response => {
        
        productList = response;
      })

    return productList;
  }
}
