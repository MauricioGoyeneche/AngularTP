import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  productList: Product[];
  orderMethod = true;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getAll(null, undefined, true)
      .subscribe(next => {
        this.productList = next.items;
      });
  }

  changePage(event) {
    this.productService.getAll(event, undefined, this.orderMethod)
      .subscribe(next => {
        this.productList = next.items;
      });
  }

  order(orderBy: string) {
    this.orderMethod = this.orderMethod !== true;
    this.productService.getAll(undefined, orderBy, this.orderMethod)
      .subscribe(next => {
        this.productList = next.items;
      });
  }
}
