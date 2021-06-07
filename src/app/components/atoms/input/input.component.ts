import { Component, OnInit, Input } from '@angular/core';
import { Action } from 'src/app/interfaces/Action';
import { Atom } from 'src/app/models/Atom';
import { ActionsService } from 'src/app/services/actions/actions.service';
import { timer, interval, Observable, Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent extends Atom implements OnInit {

  @Input() classList: string[];
  @Input() type: string;
  @Input() placeHolder: string;
  @Input() actionName: string;

  waiting: boolean = false;
  text: string = '';

  searchDelay$: Observable<number> = timer(100);
  unsubscribe$ = new Subject<void>();

  constructor(private actionsService: ActionsService) {
    super();
  }

  ngOnInit(): void {
  }

  emitAction(e) {
    this.text = e.target.value;

    if (this.text.length < 1) {
      const action: Action = { name: 'close-search-mode' }
      this.actionsService.actions$.emit(action)
    }

    if (this.waiting) {
      return;

    } else {
      this.waiting = true;

      this.searchDelay$
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(() => {
          this.waiting = false;

          if (this.text.length > 1) {
            const action: Action = { name: this.actionName, value: this.text }
            this.actionsService.actions$.emit(action)
          }


        })

      setTimeout(() => {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.waiting = false;
      }, 3000)
    }

  }

}
