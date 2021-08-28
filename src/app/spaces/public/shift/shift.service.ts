import { Injectable } from '@angular/core';

import { ModelService } from '@/base/model.service';
import { Shift, ShiftFactory } from './shift';

@Injectable()
export class ShiftService extends ModelService<Shift> {
  public createInstance(): Shift {
    return ShiftFactory.create({ id: null });
  }
}
