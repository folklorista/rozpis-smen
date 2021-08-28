import { Model } from '@/base/model';

export class Employee extends Model {
  constructor(public id: number, public name?: string) {
    super(id);
  }
}

export class EmployeeFactory {
  static create(item: Employee): Employee {
    return new Employee(item.id || undefined, item.name || undefined);
  }
}
