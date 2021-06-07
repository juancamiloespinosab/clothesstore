import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsGridService } from 'src/app/services/products-grid/products-grid.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  @ViewChild('options') options;

  constructor(private productsGridService: ProductsGridService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
   
    this.productsGridService.mainHeaderComponenet = this;
  }

}
