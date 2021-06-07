import { Component, OnInit, Input, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { Action } from 'src/app/interfaces/Action';
import { Atom } from 'src/app/models/Atom';
import { ActionsService } from 'src/app/services/actions/actions.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { DataService } from 'src/app/services/data/data.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent extends Atom implements OnInit {

  @Output() clickEvent: EventEmitter;

  @Input() icon: string;
  @Input() text: string;
  @Input() action: Action;
  @Input() url: string;

  ICONS_URL: string = '/assets/icons/';

  constructor(private navigationService: NavigationService, private actionsService: ActionsService, public cartService: CartService) {
    super();
  }

  ngOnInit(): void {

  }

  emitAction() {
    this.actionsService.actions$.emit(this.action)

  }

}
