import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Output()
  pageEvent: EventEmitter<boolean> = new EventEmitter();
  page = 0;

  constructor() {
  }

  ngOnInit() {

  }

  changePage(change: boolean) {
    this.pageEvent.emit(change);
    this.page = change ? this.page += 1 : this.page -= 1;
  }

}
