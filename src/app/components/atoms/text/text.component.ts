import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Input() type: string;
  @Input() text: string;
  @Input() classList: string[];


  constructor() { }

  ngOnInit(): void {
  }

}
