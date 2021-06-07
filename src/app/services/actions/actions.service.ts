import { EventEmitter, Injectable } from '@angular/core';
import { Action } from 'src/app/interfaces/Action';
import { CartService } from '../cart/cart.service';
import { DataService } from '../data/data.service';
import { NavigationService } from '../navigation/navigation.service';
import { ProductsGridService } from '../products-grid/products-grid.service';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  actions$ = new EventEmitter<Action>();

  constructor(private dataService: DataService, private navigationService: NavigationService, private productsGridService: ProductsGridService, private cartService: CartService) {

    this.subscribeToActions()
  }

  subscribeToActions() {
    this.actions$.subscribe((action: Action) => {

      this.actionController(action)

    })
  }

  actionController(action: Action) {
    switch (action.name) {
      case 'prev-nav-top-products-grid':
        this.productsGridService.navigation('top-products-grid', 'prev');
        break;

      case 'next-nav-top-products-grid':
        this.productsGridService.navigation('top-products-grid', 'next');
        break;

      case 'prev-nav-results-box-grid':
        this.productsGridService.navigation('results-box-grid', 'prev');
        break;

      case 'next-nav-results-box-grid':
        this.productsGridService.navigation('results-box-grid', 'next');
        break;

      case 'pre-search-products':
        this.dataService.searchKeyWords = action.value;
        this.dataService.emitPreProductsList(action.value);
        this.productsGridService.avtiveSearchMode();
        break;

      case 'search-products':
        this.navigationService.navigateTo('/search-results');
        this.dataService.emitProductsList();
        this.productsGridService.deactivateSearchMode();
        this.navigationService.smoothScrollToTop();
        break;

      case 'close-search-mode':
        this.productsGridService.deactivateSearchMode();
        break;
      case 'open-menu':
        this.navigationService.openMenu();
        break;
      case 'close-menu':
        this.navigationService.closeMenu();
        break;
      case 'add-product-to-cart':
        this.cartService.addToCart(action.value)
        break;
    }
  }
}
