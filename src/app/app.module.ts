// import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import localeCs from '@angular/common/locales/cs';
import { Injector, LOCALE_ID, NgModule } from '@angular/core';
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { KeyboardShortcutsModule } from 'ng-keyboard-shortcuts';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { RoutesModule } from './routes/routes.module';
import { setAppInjector } from './shared/app-injector';
import { SharedModule } from './shared/shared.module';

// FIXME: set locale
// registerLocaleData(localeCs);

// https://github.com/ocombe/ng2-translate/issues/218
export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule, // required for ng2-tag-input
    BrowserModule,
    CoreModule,
    HttpClientModule,
    KeyboardShortcutsModule.forRoot(),
    LayoutModule,
    MatDialogModule,
    RoutesModule,
    SharedModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
    // FIXME: set locale
    // { provide: LOCALE_ID, useValue: 'cs-CZ' },
  ],
})
export class AppModule {
  constructor(injector: Injector) {
    setAppInjector(injector);
  }
}
