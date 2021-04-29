import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeCardComponent implements OnInit {

  @Input()
  title: string = ''

  @Input()
  image: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
