import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-title',
  templateUrl: './detail-title.component.html',
  styleUrls: ['./detail-title.component.scss'],
})
export class DetailTitleComponent implements OnInit {
  @Input()
  name: string = '';

  constructor() {}

  ngOnInit(): void {}

  public openCartList() {
    const el = document.getElementById('mySidenav');
    el ? (el.style.width = '250px') : undefined;
  }
}
