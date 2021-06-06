import { Component, OnInit, Input, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { Action } from 'src/app/interfaces/Action';
import { ActionsService } from 'src/app/services/actions/actions.service';
import { DataService } from 'src/app/services/data/data.service';
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
  @Input() action: Action;
  @Input() url: string;

  ICONS_URL: string = '/assets/icons/';

  constructor(private navigationService: NavigationService, private actionsService: ActionsService) {

  }

  ngOnInit(): void {

  }

  emitAction() {
    this.actionsService.actions$.emit(this.action)

  }

}
