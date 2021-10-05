import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@/shared/shared.module';
import { PagesModule } from './pages/pages.module';

import { routes } from './routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppModule } from './app/app.module';
import { MonthViewComponent } from './month-view/month-view.component';
import { MonthViewRowComponent } from './month-view/month-view-row/month-view-row.component';

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(routes), PagesModule, AppModule],
  declarations: [DashboardComponent, MonthViewComponent, MonthViewRowComponent],
  exports: [RouterModule],
})
export class RoutesModule {
  constructor() {}
}
