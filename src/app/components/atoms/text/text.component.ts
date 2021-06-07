import { Component, Input, OnInit } from '@angular/core';
import { Atom } from 'src/app/models/Atom';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent extends Atom implements OnInit {

  @Input() text: string;


  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
