// Copyright (c) 2020 Benjamin La Madrid
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { DataAccessApiIService } from '../data-access.api.iservice';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizedAccess } from 'src/app/models/AuthorizedAccess';
import { HttpService } from 'src/app/shared/http.aservice';
import { HttpClient } from '@angular/common/http';
import { baseURI } from 'src/environments/data-api.environment';

@Injectable()
export class HttpDataAccessApiService
  extends HttpService
  implements DataAccessApiIService {

  protected baseURI = `${baseURI}/access`;

  constructor(
    protected http: HttpClient
  ) {
    super();
  }

  public getAuthorizedAccess(): Observable<AuthorizedAccess> {
    return this.http.get<AuthorizedAccess>(
      this.baseURI
    );
  }

  public getResourceAuthorizedAccess(resource: string): Observable<AuthorizedAccess> {
    return this.http.get<AuthorizedAccess>(
      `${this.baseURI}/${resource}`
    );
  }

}
