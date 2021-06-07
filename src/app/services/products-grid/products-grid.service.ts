import { EventEmitter, Injectable, Renderer2, ElementRef } from '@angular/core';
import { MainHeaderComponent } from 'src/app/components/molecules/main-header/main-header.component';
import { ProductsGridComponent } from 'src/app/components/molecules/products-grid/products-grid.component';
import { Product } from 'src/app/interfaces/Product';
import { ApiService } from '../api/api.service';
import { CartService } from '../cart/cart.service';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsGridService {

  productsGridComponentsList: ProductsGridComponent[] = [];
  mainHeaderComponenet: MainHeaderComponent;

  constructor(private dataService: DataService, private apiService: ApiService, private cartService: CartService) {

  }

  async initGrid(name: string) {

    const gridComponent = this.findGridByName(name);


    switch (name) {
      case 'cart':
        gridComponent.productsList = this.cartService.cartProductsList;
        gridComponent.columnsRowsLimitToRender = gridComponent.productsList.length;
        this.selectProductsToRender(gridComponent);
        break;
      case 'top-products-grid':
        gridComponent.columnsRowsLimitToRender = this.calcGridNumberColumnsRows(gridComponent, 'grid-template-columns');
        gridComponent.productsList = await this.getTopProducts();
        this.selectProductsToRender(gridComponent);
        break;

      case 'results-box-grid':
        this.dataService.preProductsList$.subscribe((productsList: Product[]) => {
          gridComponent.columnsRowsLimitToRender = this.calcGridNumberColumnsRows(gridComponent, 'grid-template-rows');
          gridComponent.productsList = productsList;
          this.selectProductsToRender(gridComponent);
        })
        break;
      case 'results-search':
        this.dataService.productsList$.subscribe((productsList: Product[]) => {
          gridComponent.productsList = productsList;
          gridComponent.columnsRowsLimitToRender = gridComponent.productsList.length;
          this.selectProductsToRender(gridComponent);
        })
        break;
    }
  }

  private findGridByName(name: string) {
    return this.productsGridComponentsList.find(grid => grid.name == name);
  }

  private calcGridNumberColumnsRows(gridComponent: ProductsGridComponent, cssStyleName: string) {
    const gridElement = gridComponent.grid.nativeElement;
    const elementStyles = getComputedStyle(gridElement);
    return this.getNumberOfColumns(elementStyles.getPropertyValue(cssStyleName));
  }
  private getNumberOfColumns(elment: string) {
    return elment.split(' ').length;

  }

  avtiveSearchMode() {
    this.mainHeaderComponenet.options.nativeElement.classList.add('main-header__options--search-mode')

  }

  deactivateSearchMode() {
    this.mainHeaderComponenet.options.nativeElement.classList.remove('main-header__options--search-mode')

  }

  navigation(gridName: string, type: string) {

    const gridComponent = this.findGridByName(gridName);

    const offset = gridComponent.offset;
    const arrayLength = gridComponent.productsList.length;
    const limit = gridComponent.columnsRowsLimitToRender;

    if (this.validateNavigation(arrayLength, offset, limit, type)) {


      if (type == 'next') {
        gridComponent.offset += limit;
      }

      if (type == 'prev') {
        gridComponent.offset -= limit;
      }

      this.selectProductsToRender(gridComponent);
    }

  }

  validateNavigation(arrayLength: number, offset: number, limit: number, type: string) {
    switch (type) {
      case 'next':
        return ((offset + limit) < arrayLength);
      case 'prev':
        return ((offset - limit) >= 0);
    }

  }

  private selectProductsToRender(gridComponent: ProductsGridComponent) {

    gridComponent.productsArrayToRender = []

    if (gridComponent.productsList.length > 0) {
      gridComponent.resultsFound = true;


      for (let i = gridComponent.offset; i < (gridComponent.offset + gridComponent.columnsRowsLimitToRender); ++i) {
        if (gridComponent.offset < gridComponent.productsList.length) {
          gridComponent.productsArrayToRender.push(gridComponent.productsList[i])

        }
      }

    } else {
      gridComponent.resultsFound = false;
    }

  }

  private async getTopProducts(): Promise<Product[]> {
    return await this.dataService.getTopProducts();
  }

  // private async getProducts() {
  //   return await this.dataService.getProductsList();
  // }

}
