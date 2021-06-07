import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private dataService: DataService, private navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.dataService.resetProductsListOffset();
    this.navigationService.smoothScrollToTop();
  }

}
