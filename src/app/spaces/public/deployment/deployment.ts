import { Model } from '@/base/model';
import { Employee } from '@/spaces/public/employee/employee';
import { Workplace } from '@/spaces/public/workplace/workplace';
import { Shift } from '@/spaces/public/shift/shift';

export class Deployment extends Model {
  constructor(
    public id?: number,
    public idEmployee?: number,
    public idWorkplace?: number,
    public idShift?: number,
    public Employee?: Employee,
    public Workplace?: Workplace,
    public Shift?: Shift
  ) {
    super(id);
  }
}

export class DeploymentFactory {
  static create(item: Deployment): Deployment {
    return new Deployment(
      item.id || undefined,
      item.idEmployee || undefined,
      item.idWorkplace || undefined,
      item.idShift || undefined
    );
  }
}
