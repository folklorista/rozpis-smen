import { Injectable } from '@angular/core';
import { ShortcutEventOutput, ShortcutInput } from 'ng-keyboard-shortcuts';
import { BehaviorSubject } from 'rxjs';

export enum ShotcutActionEnum {
  Search,
}

@Injectable({
  providedIn: 'root',
})
export class ShortcutsService {
  private action = new BehaviorSubject<ShotcutActionEnum>(null);
  public action$ = this.action.asObservable();

  shortcuts: ShortcutInput[] = [];

  // TODO: localize shortcuts' description

  constructor() {
    this.shortcuts.push({
      key: 'ctrl + shift + l',
      label: 'Searching', // 'shortcuts.sectionLabel.SEARCH'
      description: 'open search bar', // 'shortcuts.actionDescription.SEARCH'
      command: (output: ShortcutEventOutput) => {
        this.action.next(ShotcutActionEnum.Search);
      },
      preventDefault: true,
    });
  }
}
