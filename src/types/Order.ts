import { Article } from './Article';
import { Address } from './Address';

export interface Order {
  orderNo: string;
  trackingNumber: string;
  destinationCountryIso3: string;
  email: string;
  article: Article;
  address: Address;
}
