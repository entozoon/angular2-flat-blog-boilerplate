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
  articlesToRender;
  searchQuery;

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    // On first load, ask the ArticleService to get all the articles and save them to a variable
    // console.log('load 1');
    this.articleService.loadAllTheArticles().then(articles => {
      this.articles = this.articlesToRender = articles;
      // We have the articles now! Site complete, right?
    });
  }

  search() {
    // No need to pass the query as a parameter, it's already two-way bound to this.searchQuery
    console.log('Searching: ' + this.searchQuery);

    // Filter articles

    // Simply search for the query within the article titles (ignoring case)
    this.articlesToRender = this.articles.filter(article => {
      return article.title
        .toLowerCase()
        .includes(this.searchQuery.toLowerCase());
    });

    // Add to the results any content matches for the query.. but not if already in the results, erm..
  }
}
