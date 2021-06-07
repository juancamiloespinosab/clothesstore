import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { InputComponent } from '../../atoms/input/input.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild(InputComponent) inputCompoenent: InputComponent;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

  }


}
