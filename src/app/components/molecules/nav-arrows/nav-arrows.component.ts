import { Component, Input, OnInit } from '@angular/core';
import { Molecule } from 'src/app/models/Molecule';

@Component({
  selector: 'app-nav-arrows',
  templateUrl: './nav-arrows.component.html',
  styleUrls: ['./nav-arrows.component.css']
})
export class NavArrowsComponent extends Molecule implements OnInit {

  @Input() actionName: string;

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
