import { Component } from '@angular/core';
import { SettingsService } from './core/settings/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rozpis-smen';

  constructor(public settings: SettingsService) {
    this.title = this.settings.getAppSetting('name');
  }
}
