import { Component, Input, OnInit } from '@angular/core';
import { Atom } from 'src/app/models/Atom';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent extends Atom implements OnInit {

  @Input() src: string;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
