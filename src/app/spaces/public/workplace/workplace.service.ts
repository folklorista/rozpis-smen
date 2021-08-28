import { Injectable } from '@angular/core';

import { ModelService } from '@/base/model.service';
import { Workplace, WorkplaceFactory } from './workplace';

@Injectable()
export class WorkplaceService extends ModelService<Workplace> {
  public createInstance(): Workplace {
    return WorkplaceFactory.create({ id: null });
  }
}
