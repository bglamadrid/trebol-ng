import { AbstractEntity } from '../AbstractEntity';
import { ProductType } from './ProductType';

export class Product
  extends AbstractEntity {

  public id: number;
  public name: string;
  public barcode: string;
  public price: number;
  public productType: Partial<ProductType>;

  public description?: string;
  public currentStock?: number;
  public criticalStock?: number;
  public imagesURL?: string[];
}