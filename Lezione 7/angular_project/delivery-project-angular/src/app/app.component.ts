import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'delivery-project-angular';

  menuItems = [
    {
      value: 'Food',
      href: '#',
    },
    {
      value: 'Fresh',
      href: '#',
    },
    {
      value: 'Drinks',
      href: '#',
    },
    {
      value: 'Convenience',
      href: '#',
    },
  ];
}
