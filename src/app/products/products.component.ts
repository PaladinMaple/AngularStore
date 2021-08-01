import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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

  clickProduct(id: number){
    console.log('product from father');
    console.log(id);
  }
}
