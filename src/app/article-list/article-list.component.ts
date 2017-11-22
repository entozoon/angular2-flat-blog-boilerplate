import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
  // Don't include ArticleService as a provider or it creates a new instance!
})
export class ArticleListComponent implements OnInit {
  articles;
  searchQuery;

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    // On first load, ask the ArticleService to get all the articles and save them to a variable
    // console.log('load 1');
    this.articleService.loadAllTheArticles().then(articles => {
      this.articles = articles;
      // We have the articles now! Site complete, right?
    });
  }

  search() {
    // No need to pass the query as a parameter, it's already two-way bound to this.searchQuery
    console.log('Searching: ' + this.searchQuery);

    // Get a filtered array of articles
    this.articles = this.articleService.search(this.searchQuery);
  }
}
