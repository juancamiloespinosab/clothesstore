import { Component, OnInit, Input, Output } from '@angular/core';
import { Atom } from 'src/app/models/Atom';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent extends Atom implements OnInit {

  @Input() text: string;
  @Input() url: string;
  @Input() icon: string;

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
