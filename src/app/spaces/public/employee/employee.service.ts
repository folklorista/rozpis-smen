import { Injectable } from '@angular/core';

import { ModelService } from '@/base/model.service';
import { Employee, EmployeeFactory } from './employee';

@Injectable()
export class EmployeeService extends ModelService<Employee> {
  public createInstance(): Employee {
    return EmployeeFactory.create({ id: null });
  }
}
