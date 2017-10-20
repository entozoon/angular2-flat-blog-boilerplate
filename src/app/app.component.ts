import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <h1>..</h1>
  <app-articles></app-articles>
  `
})
export class AppComponent {
  title = 'app';

  constructor() {}
}
