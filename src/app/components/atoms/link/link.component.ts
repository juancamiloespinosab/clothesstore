import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  @Input() type: string;
  @Input() text: string;
  @Input() url: string;
  @Input() classList: string[];
  @Input() icon: string;

  constructor() { }

  ngOnInit(): void {
  }

}
