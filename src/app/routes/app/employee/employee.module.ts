import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@/shared/shared.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from '@/spaces/public/employee/employee.service';

const routes: Routes = [{ path: '', component: EmployeeListComponent }];

@NgModule({
  declarations: [EmployeeListComponent],
  entryComponents: [],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  providers: [EmployeeService],
  exports: [EmployeeListComponent],
})
export class EmployeeModule {}
