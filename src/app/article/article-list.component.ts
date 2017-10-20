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
  public articlesCollection; // Entire collection of articles
  public articles; // Articles that are currently visible
  public searchQuery;

  constructor(private ArticleService: ArticleService) {
    // On first load, ask the ArticleService to get all the articles and save them to a variable
    this.ArticleService.getTheArticles().then(articles => {
      this.articlesCollection = articles;
      this.articles = articles;
      // We have the articles now! Site complete! Not.
      console.log(this.articles);
    });
  }

  search() {
    // No need to pass the query as a parameter, it's already two-way bound to this.searchQuery
    console.log('Searching: ' + this.searchQuery);

    // Filter articles

    // Simply search for the query within the article titles (ignoring case)
    this.articles = this.articlesCollection.filter(article => {
      return article.title.toLowerCase().includes(this.searchQuery.toLowerCase());
    });

    // Add to the results any content matches for the query.. but not if already in the results, erm..
  }

  ngOnInit() {}
}
