import { Model } from '@/base/model';

export class Shift extends Model {
  constructor(
    public id?: number,
    public timeStart?: Date,
    public timeEnd?: Date
  ) {
    super(id);
  }
}

export class ShiftFactory {
  static create(item: Shift): Shift {
    return new Shift(
      item.id || undefined,
      item.timeStart || undefined,
      item.timeEnd || undefined
    );
  }
}
