import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@/shared/shared.module';
import { EmployeeModule } from './employee/employee.module';

const routes: Routes = [
  {
    path: 'employee',
    loadChildren: () =>
      import('./employee/employee.module').then((mod) => mod.EmployeeModule),
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    EmployeeModule,
  ],
  exports: [EmployeeModule],
})
export class AppModule {}
