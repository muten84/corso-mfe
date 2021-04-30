import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public close() {
    const el = document.getElementById('mySidenav');
    el ? (el.style.width = '0px') : undefined;
  }
}
