import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ApiService } from 'src/app/services/api/api.service';
import { DataService } from 'src/app/services/data/data.service';
import { ProductsGridService } from 'src/app/services/products-grid/products-grid.service';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css']
})
export class ProductsGridComponent implements OnInit {

  @ViewChild('grid') grid: ElementRef;
  @Input() name: string;

  productsList: Product[] = [];
  productsArrayToRender: Product[];
  columnsRowsLimitToRender: number = 0;
  offset: number = 0;

  resultsFound: boolean = true;

  constructor(
    private productsGridService: ProductsGridService,
    public dataService: DataService
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {

    setTimeout(() => {
      const findGridId = this.productsGridService.productsGridComponentsList.findIndex(grid => grid.name == this.name);

      if (findGridId >= 0) {
        this.productsGridService.productsGridComponentsList[findGridId] = this
      } else {
        this.productsGridService.productsGridComponentsList.push(this);

      }

      this.productsGridService.initGrid(this.name);
    }, 0);


  }

  async onScroll() {

    if (this.productsArrayToRender && this.name == 'results-search') {

      const productList: Product[] = await this.dataService.getProductsList();

      if (productList.length > 0) {
        productList.forEach(element => {
          this.productsArrayToRender.push(element);

        });
      }
    }

  }

}
