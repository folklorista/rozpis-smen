import { Injectable } from '@angular/core';

import { ModelService } from '@/base/model.service';
import { Employee, EmployeeFactory } from './employee';

import dataJson from './employee.json';

@Injectable()
export class EmployeeService extends ModelService<Employee> {
  constructor() {
    super();

    // load static data
    this.data = {
      items: dataJson,
      totalCount: dataJson.length,
    };
  }

  public createInstance(): Employee {
    return EmployeeFactory.create({ id: null });
  }
}
