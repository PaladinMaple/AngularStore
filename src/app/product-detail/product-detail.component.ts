import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router'

import { ProductsService } from './../products.service'
import { Product } from './../product.model'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productFromService: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ) 
  {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.productFromService = this.productsService.getProduct(id);
      console.log(this.productFromService);
    });
  }
}
