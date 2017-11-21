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

  convertWeirdObjectToArray(obj) {
    let arr = [];
    for (let key in obj) {
      arr.push(obj[key]);
    }
    return arr;
  }

  getArticleById(id) {
    return new Promise(resolve => {
      // Gather all the articles (optimisation - this shouldn't always be necessary)
      this.getTheArticles().then(articles => {
        // We should really do this in the getTheArticles function, parsing it properly
        this.articles = articles;

        // This doesn't actually fix anything, Myke you chump.
        this.articles = this.convertWeirdObjectToArray(this.articles);

        const article = this.articles.find(_ => _.id == id); // NOT triple equals

        console.log(article);
        resolve(article);

        // resolve([
        //   {
        //     title: 'hello',
        //     content: 'hey',
        //     date: 'dwa',
        //     tags: ['dw', 'dw']
        //   }
        // ]);

        // this.articles = articles;
        // let tempArticles = articles;
        // console.log(tempArticles);

        // // Filter out the specific article we want
        // const article = tempArticles.find(_ => _.id == id); // NOT triple equals

        // resolve(article);
      });
    });
  }
}
