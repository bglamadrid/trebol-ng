// Copyright (c) 2020 Benjamin La Madrid
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { TestBed } from '@angular/core/testing';
import { LocalMemoryDataModule } from 'src/app/api/data-mgt/local-memory/local-memory-data-api.module';
import { ClientManagerService } from './client-manager.service';

describe('ClientManagerService', () => {
  let service: ClientManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ LocalMemoryDataModule ],
      providers: [
        ClientManagerService
      ]
    });
    service = TestBed.inject(ClientManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
