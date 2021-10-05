import { Injectable } from '@angular/core';

import { ModelService } from '@/base/model.service';
import { Workplace, WorkplaceFactory } from './workplace';

import dataJson from './workplace.json';

@Injectable()
export class WorkplaceService extends ModelService<Workplace> {
  constructor() {
    super();

    // load static data
    this.data = {
      items: dataJson,
      totalCount: dataJson.length,
    };
  }

  public createInstance(): Workplace {
    return WorkplaceFactory.create({ id: null });
  }
}
