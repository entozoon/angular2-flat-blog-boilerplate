import { Component } from '@angular/core';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
  providers: [ArticleService]
})
export class AppComponent {
  title = 'Site';

  constructor(private articleService: ArticleService) {}
}
