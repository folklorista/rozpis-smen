import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class SettingsService implements OnInit {
  public app: any;
  public layout: any;

  constructor() {
    // App Settings
    // -----------------------------------
    this.app = {
      name: 'Rozpis směn',
      description: '',
      year: new Date().getFullYear(),
    };

    // Layout Settings
    // -----------------------------------
    this.layout = {
      isFixed: true,
      isCollapsed: true,
      isBoxed: false,
      isRTL: false,
      horizontal: false,
      isFloat: false,
      asideHover: false,
      theme: null,
      asideScrollbar: false,
      isCollapsedText: false,
      useFullLayout: false,
      hiddenFooter: false,
      offsidebarOpen: false,
      asideToggled: false,
      viewAnimation: 'ng-fadeInUp',
    };
  }
  ngOnInit(): void {}

  getAppSetting(name: string): any {
    return name ? this.app[name] : this.app;
  }
  getLayoutSetting(name: string): any {
    return name ? this.layout[name] : this.layout;
  }

  setAppSetting(name: string, value: any) {
    if (typeof this.app[name] !== 'undefined') {
      this.app[name] = value;
    }
  }
  setLayoutSetting(name: string, value: any) {
    if (typeof this.layout[name] !== 'undefined') {
      return (this.layout[name] = value);
    }
  }

  toggleLayoutSetting(name: string) {
    return this.setLayoutSetting(name, !this.getLayoutSetting(name));
  }
}
