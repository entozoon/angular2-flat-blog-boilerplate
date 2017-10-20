import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  providers: [ArticleService]
})
export class ArticlesComponent implements OnInit {
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
