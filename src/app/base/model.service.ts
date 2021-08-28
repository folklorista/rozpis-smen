import { Injectable } from '@angular/core';
import { of, throwError, Observable } from 'rxjs';

export interface Datamodel<T> {
  items: T[];
  totalCount: number;
}

@Injectable()
export abstract class ModelService<
  T extends { id: number; [key: string]: any }
> {
  public abstract createInstance(): T;
  protected data: Datamodel<T> = {
    items: [],
    totalCount: 0,
  };

  constructor() {}

  public getList(): Observable<Datamodel<T>> {
    return of(this.data);
  }

  public get(id?: number): Observable<T> {
    if (id) {
      const row = this.data.items.find((item) => item.id === id);
      if (row) {
        return of(row);
      } else {
        return of();
      }
    } else {
      return new Observable<T>((observer) => {
        const newItem = this.createInstance();
        observer.next(newItem);
        observer.complete();
        return;
      });
    }
  }

  create(data: T): Observable<T> {
    let newId = Math.max(...this.data.items.map((item) => item.id));
    data.id = ++newId;
    this.data.items.push(data);
    this.data.totalCount++;
    return this.get(newId);
  }

  update(id: number, data: T): Observable<T> {
    const rowIndex = this.data.items.findIndex((item) => item.id === id);
    this.data.items[rowIndex] = data;
    return this.get(id);
  }

  delete(id: number): Observable<void> {
    const rowIndex = this.data.items.findIndex((item) => item.id === id);

    if (rowIndex > -1) {
      this.data.items.splice(rowIndex, 1);
      this.data.totalCount--;
      return of();
    } else {
      const error: Error = {
        name: 'Unable to delete',
        message: 'Item with id ' + id.toString() + ' was not found',
      };
      console.error(error);
      return throwError(error);
    }
  }
}
