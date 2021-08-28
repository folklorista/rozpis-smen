import { Injectable } from '@angular/core';

import { ModelService } from '@/base/model.service';
import { Deployment, DeploymentFactory } from './deployment';

@Injectable()
export class DeploymentService extends ModelService<Deployment> {
  public createInstance(): Deployment {
    return DeploymentFactory.create({ id: null });
  }
}
