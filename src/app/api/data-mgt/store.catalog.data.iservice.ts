// Copyright (c) 2020 Benjamin La Madrid
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Observable } from 'rxjs';
import { ProductFilters } from 'src/app/shared/product-filters-panel/product-filters-panel.component';
import { Product } from 'src/app/models/entities/Product';
import { ProductFamily } from 'src/app/models/entities/ProductFamily';
import { ProductType } from 'src/app/models/entities/ProductType';

export interface StoreCatalogDataIService {
  readById(id: number): Observable<Product>;
  readAll(): Observable<Product[]>;
  readFiltered(filters: ProductFilters): Observable<Product[]>;
  readProductTypes(): Observable<ProductType[]>;
  readProductTypesByFamilyId(productFamilyId: number): Observable<ProductType[]>;
  readProductFamilies(): Observable<ProductFamily[]>;
}
