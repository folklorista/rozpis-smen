import { Model } from '@/base/model';

export class Workplace extends Model {
  constructor(public id?: number, public name?: string) {
    super(id);
  }
}

export class WorkplaceFactory {
  static create(item: Workplace): Workplace {
    return new Workplace(item.id || undefined, item.name || undefined);
  }
}
