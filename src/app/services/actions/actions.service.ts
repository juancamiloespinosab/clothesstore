import { EventEmitter, Injectable } from '@angular/core';
import { Action } from 'src/app/interfaces/Action';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  actions$ = new EventEmitter<Action>();

  constructor(private dataService: DataService) {

    this.subscribeToActions()
  }

  subscribeToActions() {
    this.actions$.subscribe((action: Action) => {
      console.log('action');
      
      this.actionController(action)

    })
  }

  actionController(action: Action) {
    switch (action.name) {
      case 'prev-top-produts':
        break;

      case 'next-top-produts':
        break;
    }
  }
}
