import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ArticleService {
  public articles;

  constructor(public http: Http) {}

  // Function returning a promise which, when resolved, returns the articles as an object array
  getTheArticles() {
    return new Promise(resolve => {
      this.http.get('assets/articles.json').subscribe(response => {
        this.articles = response.json();
        resolve(this.articles);
      });
    });
  }

  getArticleById(id) {
    return new Promise(resolve => {
      // Gather all the articles (optimisation - this shouldn't always be necessary)
      this.getTheArticles().then(articles => {
        // We should really do this in the getTheArticles function, parsing it properly
        this.articles = articles;

        // Filter out the specific article we want
        const article = this.articles.find(_ => _.id == id); // NOT triple equals

        // Return it with the promise within .then()
        resolve(article);
      });
    });
  }
}
