import { EventEmitter, Injectable, Renderer2, ElementRef } from '@angular/core';
import { ProductsGridComponent } from 'src/app/components/molecules/products-grid/products-grid.component';
import { Product } from 'src/app/interfaces/Product';
import { ApiService } from '../api/api.service';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsGridService {

  productsGridComponentsList: ProductsGridComponent[] = [];

  constructor(private dataService: DataService, private apiService: ApiService,) {

  }

  async initGrid(name: string) {

    const gridComponent = this.findGridByName(name);

    switch (name) {
      case 'top-products-grid':
        gridComponent.columnsLimitToRender = this.calcGridNumberColumns(gridComponent);
        gridComponent.productsList = await this.getTopProducts(gridComponent);
        this.selectProductsToRender(gridComponent);
        break;
    }
  }

  private findGridByName(name: string) {
    return this.productsGridComponentsList.find(grid => grid.name == name);
  }

  private calcGridNumberColumns(gridComponent: ProductsGridComponent) {
    const gridElement = gridComponent.grid.nativeElement;
    const elementStyles = getComputedStyle(gridElement);
    return this.getNumberOfColumns(elementStyles.getPropertyValue('grid-template-columns'));
  }

  private getNumberOfColumns(elment: string) {
    return elment.split(' ').length;

  }

  private selectProductsToRender(gridComponent: ProductsGridComponent) {

    gridComponent.productsArrayToRender = []

    for (let i = gridComponent.offset; i < (gridComponent.offset + gridComponent.columnsLimitToRender); ++i) {
      if (gridComponent.offset < gridComponent.productsList.length) {
        gridComponent.productsArrayToRender.push(gridComponent.productsList[i])

      }
    }

  }

  private async getTopProducts(gridComponent: ProductsGridComponent): Promise<Product[]> {
    return gridComponent.productsList = await this.apiService.getProducts();
  }

}
