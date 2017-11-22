import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ArticleService {
  articles;

  constructor(public http: Http) {}

  // Get every article - returns a promise which, when resolved, saves articles and returns them
  loadAllTheArticles() {
    return new Promise(resolve => {
      // If the articles are already loaded, don't bother loading them again
      if (this.articles) {
        resolve(this.articles);
      } else {
        // Load articles from JSON file
        this.http.get('assets/articles.json').subscribe(response => {
          // console.log('WE ONLY WANT TO RUN THIS ONCE');
          this.articles = response.json();
          resolve(this.articles);
        });
      }
    });
  }

  // Get specific article with content, e.g. for detail page
  getArticleById(id) {
    return new Promise(resolve => {
      // Gather all the articles (optimisation - this shouldn't always be necessary)
      this.loadAllTheArticles().then(articles => {
        // Filter out the specific article we want
        const article = this.articles.find(_ => _.id == id); // NOT triple equals
        // Return it with the promise within .then()
        resolve(article);
      });
    });
  }

  // Search for the query within the article titles (ignoring case)
  search(searchQuery) {
    return this.articles.filter(article => {
      return article.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }
}
