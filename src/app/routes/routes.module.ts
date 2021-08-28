import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@/shared/shared.module';
import { PagesModule } from './pages/pages.module';

import { routes } from './routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppModule } from './app/app.module';

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(routes), PagesModule, AppModule],
  declarations: [DashboardComponent],
  exports: [RouterModule],
})
export class RoutesModule {
  constructor() {}
}
