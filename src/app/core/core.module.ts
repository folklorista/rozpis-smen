import { NgModule, Optional, SkipSelf } from '@angular/core';
import { KeyboardShortcutsModule } from 'ng-keyboard-shortcuts';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { SettingsService } from './settings/settings.service';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';

@NgModule({
  imports: [KeyboardShortcutsModule.forRoot()],
  providers: [SettingsService],
  declarations: [ShortcutsComponent],
  exports: [ShortcutsComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
