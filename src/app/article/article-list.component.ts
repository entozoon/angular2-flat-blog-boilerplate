import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  providers: [ArticleService]
})
export class ArticleListComponent implements OnInit {
  public articles;

  constructor(private ArticleService: ArticleService) {
    this.ArticleService.getTheArticles().then(articles => {
      this.articles = articles;
      // We have the articles now!
      console.log(this.articles);
    });
  }

  ngOnInit() {}
}
