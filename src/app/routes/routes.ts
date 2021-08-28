import { LayoutComponent } from '@/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './pages/error404/error404.component';
import { Error500Component } from './pages/error500/error500.component';

export const routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'app',
        loadChildren: () =>
          import('./app/app.module').then((mod) => mod.AppModule),
      },
    ],
  },

  // Not lazy-loaded routes
  { path: '404', component: Error404Component },
  { path: '500', component: Error500Component },

  // Not found
  { path: '**', redirectTo: '404' },
];
