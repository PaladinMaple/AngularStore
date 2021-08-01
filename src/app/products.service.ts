import { Injectable } from '@angular/core';
import {Product} from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/leisure.jpg',
      title: 'Leisure',
      price: 80,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/modernLifeIsRubbish.jpg',
      title: 'Modern Life Is Rubbish',
      price: 80,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/parklife.jpg',
      title: 'Parklife',
      price: 80,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/thinkTank.jpg',
      title: 'Think Tank',
      price: 80,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/magicWhip.jpg',
      title: 'Magic Whip',
      price: 80,
      description: 'bla bla bla bla bla'
    }
  ];

  constructor() { }

  getAllProducts(){
    return this.products;
  }

  getProduct(id: string){
    return this.products.find(item => id === item.id);
  }
}
