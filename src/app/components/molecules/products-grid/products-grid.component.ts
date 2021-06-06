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

  productsList: Product[];
  productsArrayToRender: Product[];
  columnsLimitToRender: number = 0;
  rowsLimitToRender: number = 0;
  offset: number = 0;

  constructor(
    private productsGridService: ProductsGridService
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.productsGridService.productsGridComponentsList.push(this);
    this.productsGridService.initGrid(this.name);
  }



}
