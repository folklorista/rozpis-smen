import { AfterViewInit, Component } from '@angular/core';
import { ShortcutInput } from 'ng-keyboard-shortcuts';

import { ShortcutsService } from './shortcuts.service';

@Component({
  selector: 'app-shortcuts',
  template: `<ng-keyboard-shortcuts
    [shortcuts]="shortcuts"
  ></ng-keyboard-shortcuts>`,
  styles: [],
})
export class ShortcutsComponent implements AfterViewInit {
  shortcuts: ShortcutInput[] = [];

  constructor(private shortcutsService: ShortcutsService) {}

  ngAfterViewInit(): void {
    this.shortcuts.push(...this.shortcutsService.shortcuts);
  }
}
