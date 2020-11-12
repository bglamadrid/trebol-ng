// Copyright (c) 2020 Benjamin La Madrid
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Sell } from 'src/app/models/entities/Sell';
import { SellDetail } from 'src/app/models/entities/SellDetail';
import { CompositeEntityDataApiIService } from '../composite-entity-data-api.iservice';
import { EntityLocalMemoryDataApiService } from './entity.local-memory-data-api.aservice';

export const MOCK_SALES: Partial<Sell>[] = [
  {
    id: 1,
    soldOn: '2020-06-16',
    seller: { id: 1 },
    details: [
      { id: 1, product: { id: 1 }, units: 4 },
      { id: 2, product: { id: 2 }, units: 1 },
    ]
  },
  {
    id: 2,
    soldOn: '2020-06-18',
    seller: { id: 1 },
    details: [
      { id: 3, product: { id: 3 }, units: 2 },
    ]
  },
  {
    id: 3,
    soldOn: '2020-06-18',
    seller: { id: 1 },
    details: [
      { id: 4, product: { id: 2 }, units: 1 },
    ]
  },
  {
    id: 4,
    soldOn: '2020-06-22',
    seller: { id: 3 },
    details: [
      { id: 5, product: { id: 1 }, units: 2 },
    ]
  },
  {
    id: 5,
    soldOn: '2020-07-03',
    seller: { id: 5 },
    details: [
      { id: 6, product: { id: 1 }, units: 1 },
      { id: 7, product: { id: 3 }, units: 1 },
    ]
  }
];

@Injectable()
export class SalesLocalMemoryDataApiService
  extends EntityLocalMemoryDataApiService<Sell>
  implements CompositeEntityDataApiIService<Sell, SellDetail> {

  protected items: Sell[] = MOCK_SALES.map(n => Object.assign(new Sell(), n));

  constructor() {
    super();
  }

  public readDetailsById(id: number): Observable<SellDetail[]> {
    return this.readById(id).pipe(
      map(s => s.details)
    );
  }
}
