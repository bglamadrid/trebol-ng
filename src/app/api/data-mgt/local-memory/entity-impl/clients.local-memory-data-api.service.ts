// Copyright (c) 2020 Benjamin La Madrid
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Injectable } from '@angular/core';
import { Client } from 'src/app/models/entities/Client';
import { EntityLocalMemoryDataApiService } from '../entity.local-memory-data-api.aservice';

export const MOCK_CLIENTS: Partial<Client>[] = [
  {
    id: 1,
    person: {
      id: 1,
      name: 'Anónimo',
      idCard: '1111111-1',
      address: 'Calle Sin Salida 47',
      email: 'example@test.org'
    }
  },
  {
    id: 2,
    person: {
      id: 2,
      name: 'Ayla H.',
      idCard: '2222589-9',
      address: 'Hacienda El Tintero 370',
      email: 'ayla@test.org'
    }
  },
  {
    id: 3,
    person: {
      id: 3,
      name: 'Benito F.',
      idCard: '3327271-6',
      address: 'Pedro Loza 533',
      email: 'benito@test.org'
    }
  },
  {
    id: 4,
    person: {
      id: 4,
      name: 'Camelia M.',
      idCard: '4441755-7',
      address: 'Rio Panuco, 128',
      email: 'camelia@test.org'
    }
  },
  {
    id: 5,
    person: {
      id: 5,
      name: 'Daniel G.',
      idCard: '5591163-8',
      address: 'Constitucion 27',
      email: 'daniel@test.org'
    }
  }
];

@Injectable()
export class ClientsLocalMemoryDataApiService
  extends EntityLocalMemoryDataApiService<Client> {

  protected items: Client[] = MOCK_CLIENTS.map(n => Object.assign(new Client(), n));

  constructor() {
    super();
  }
}
