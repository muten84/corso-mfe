import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss'],
})
export class DetailCardComponent implements OnInit {
  @Input()
  detail: any = undefined;

  constructor() {}

  ngOnInit(): void {}
}
