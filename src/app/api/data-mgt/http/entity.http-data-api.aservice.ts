// Copyright (c) 2020 Benjamin La Madrid
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { HttpService } from 'src/app/shared/http.abstract-service';
import { baseURI } from 'src/environments/data-api.environment';

export abstract class EntityHttpDataApiService
  extends HttpService {

  protected baseURI = `${baseURI}/api`;
}
