import { Component, OnInit, Input, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Output() clickEvent: EventEmitter;

  @Input() classList: string[];
  @Input() type: string;
  @Input() icon: string;
  @Input() text: string;
  @Input() action: string;
  @Input() url: string;

  ICONS_URL: string = '/assets/icons/';

  constructor(private navigationService: NavigationService) {

  }

  ngOnInit(): void {

  }

  executeAction() {
    switch (this.action) {
      case 'navigation':
        this.navigationService.navigateTo(this.url);
        break;
    }
  }

}
