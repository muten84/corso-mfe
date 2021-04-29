import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-card-row',
  templateUrl: './home-card-row.component.html',
  styleUrls: ['./home-card-row.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeCardRowComponent implements OnInit {

  @Input()
  cards: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
