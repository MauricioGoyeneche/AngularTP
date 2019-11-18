import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tr[app-list-item]',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input()
  product: Product;

  constructor() {
  }

  ngOnInit() {

  }

}
