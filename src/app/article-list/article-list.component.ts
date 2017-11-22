import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
  providers: [ArticleService]
})
export class ArticleListComponent implements OnInit {
  public articles;
  public searchQuery;

  constructor(private articleService: ArticleService) {
    // On first load, ask the ArticleService to get all the articles and save them to a variable
    // console.log('load 1');
    this.articleService.loadAllTheArticles().then(articles => {
      //   this.articles = articles;
      //   // We have the articles now! Site complete, right?
      //   // console.log(this.articleService.articles);
    });
  }

  ngOnInit() {
    console.log('ngOnInit');

    this.articleService.articlesCurrent.subscribe(articles => {
      if (articles) {
        this.articles = articles;
        console.log('SUSCRIBE REC:');
        console.log(articles);
      }
    });
  }

  search() {
    // No need to pass the query as a parameter, it's already two-way bound to this.searchQuery
    console.log('Searching: ' + this.searchQuery);

    // Filter articles

    // // Simply search for the query within the article titles (ignoring case)
    // this.articles = this.articlesCollection.filter(article => {
    //   return article.title
    //     .toLowerCase()
    //     .includes(this.searchQuery.toLowerCase());
    // });

    // Add to the results any content matches for the query.. but not if already in the results, erm..
  }
}
