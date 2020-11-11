// Copyright (c) 2020 Benjamin La Madrid
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Component, Input } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { Product } from 'src/app/models/entities/Product';
import { StoreCatalogService } from '../store-catalog.service';

@Component({
  selector: 'app-store-catalog-product-card',
  templateUrl: './store-catalog-product-card.component.html',
  styleUrls: ['./store-catalog-product-card.component.css']
})
export class StoreCatalogProductCardComponent {

  @Input() public product: Product = null;

  constructor(
    protected storeService: StoreService,
    protected catalogService: StoreCatalogService
  ) { }

  public onClickAddProduct(): void {
    this.storeService.addProductToCart(this.product);
  }

  public onClickViewProduct(): void {
    this.catalogService.viewProduct(this.product);
  }

}
