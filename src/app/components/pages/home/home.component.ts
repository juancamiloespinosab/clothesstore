import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ActionsService } from 'src/app/services/actions/actions.service';
import { ApiService } from 'src/app/services/api/api.service';
import { DataService } from 'src/app/services/data/data.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ProductsGridService } from 'src/app/services/products-grid/products-grid.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private apiService: ApiService,
    private actionsService: ActionsService,
    private navigationService: NavigationService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.navigationService.smoothScrollToTop();
  }
}
