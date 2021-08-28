import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@/shared/shared.module';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';

@NgModule({
  imports: [
    SharedModule,
    // RouterModule.forChild(routes)
  ],
  declarations: [Error404Component, Error500Component],
  exports: [RouterModule, Error404Component, Error500Component],
})
export class PagesModule {}
