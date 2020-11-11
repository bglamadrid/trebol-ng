// Copyright (c) 2020 Benjamin La Madrid
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AUTH_INJECTION_TOKEN } from 'src/app/api/session/auth.injection-token';
import { AuthenticationIService } from 'src/app/api/session/auth.iservice';
import { AuthorizedAccess } from 'src/app/models/AuthorizedAccess';

@Injectable({ providedIn: 'root' })
export class ClientManagerAccessResolver
  implements Resolve<AuthorizedAccess> {

  constructor(
    @Inject(AUTH_INJECTION_TOKEN) protected authService: AuthenticationIService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<AuthorizedAccess>|Promise<AuthorizedAccess>|AuthorizedAccess {
    return this.authService.getResourceAuthorizedAccess('client');
  }
}
