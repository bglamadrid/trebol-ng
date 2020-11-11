// Copyright (c) 2020 Benjamin La Madrid
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CompanyDetails } from 'src/app/models/CompanyDetails';
import { ProductFamily } from 'src/app/models/entities/ProductFamily';
import { ProductType } from 'src/app/models/entities/ProductType';
import { SellType } from 'src/app/models/entities/SellType';
import { Person } from 'src/app/models/entities/Person';
import { SharedDataIService } from '../shared.data.iservice';

export const MOCK_COMPANY_DETAILS: CompanyDetails = {
  name: 'Importaciones NBazaar',
  description: 'Somos una pequeña empresa de importación de ropa y calzado. Llevamos más de 4 años en el mercado, conectando la manufactura fuera del país con el retail nacional.',
  bannerImageURL: 'assets/img/mikael-frivold-vJ1Pf0d-0HY-unsplash.jpg',
  logoImageURL: 'assets/img/logo.png'
};

export const MOCK_PRODUCT_FAMILIES: Partial<ProductFamily>[] = [
  { id: 1, name: 'Ropa y Calzado' }
];

export const MOCK_PRODUCT_TYPES: Partial<ProductType>[] = [
  { id: 1, name: 'Zapatillas Hombre', productFamily: { id: 1 } }
];

export const MOCK_SELL_TYPES: SellType[] = [
  { id: 'B', description: 'Boleta' },
  { id: 'F', description: 'Factura' }
];

@Injectable()
export class SharedLocalMemoryDataService
  implements SharedDataIService {

  readAllPeople(): Observable<Person[]> {
    throw new Error('Method not implemented.');
  }

  public readCompanyDetails(): Observable<CompanyDetails> {
    return of(MOCK_COMPANY_DETAILS);
  }

  public readAllProductFamilies(): Observable<ProductFamily[]> {
    return of(MOCK_PRODUCT_FAMILIES.map(f => Object.assign(new ProductFamily(), f)));
  }

  public readAllProductTypes(): Observable<ProductType[]> {
    return of(MOCK_PRODUCT_TYPES.map(t => Object.assign(new ProductType(), t)));
  }

  public readAllProductTypesByFamilyId(familyId: number): Observable<ProductType[]> {
    return of(MOCK_PRODUCT_TYPES.filter(t => t.productFamily.id === familyId)
      .map(t => Object.assign(new ProductType(), t))
    );
  }

  public readAllSellTypes(): Observable<SellType[]> {
    return of(MOCK_SELL_TYPES.map(t => Object.assign(new SellType(), t)));
  }
}
