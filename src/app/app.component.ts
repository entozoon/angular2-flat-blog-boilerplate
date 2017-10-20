import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <h1>..</h1>
    <app-article-list></app-article-list>
  `
})
export class AppComponent {
  title = 'app';

  constructor() {}
}
