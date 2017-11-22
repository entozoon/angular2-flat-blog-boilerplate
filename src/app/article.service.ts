import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ArticleService {
  private articlesSubject = new BehaviorSubject(null);
  articlesCurrent = this.articlesSubject.asObservable();

  private counter = 0;

  constructor(public http: Http) {
    // this.loadAllTheArticles();
  }

  // Get every article - returns a promise which, when resolved, saves articles and returns them
  loadAllTheArticles() {
    this.counter++;
    console.log('------------- ' + this.counter + ' ------------- ');
    return new Promise(resolve => {
      // console.log('----------');
      // console.log(this.articlesSubject);
      // console.log('----------');

      // if (this.articlesSubject && this.articlesSubject.length) {
      //   console.log('SHORTCUTTTTTTTTTTTTTTTTTTTTTT');
      //   resolve(this.articlesSubject);
      // }
      console.log('loadAllTheArticles');
      console.log(this.articlesSubject.getValue());

      this.http.get('assets/articles.json').subscribe(response => {
        console.log('WE ONLY WANT TO SEE THIS ONCE ');
        // this.articlesSubject = response.json();

        this.articlesSubject.next(response.json());
        resolve(response.json());
      });
    });
  }

  // getAllTheArticles() {
  //   console.log('getAllTheArticles');
  //   return this.articlesSubject;
  // }

  // Get specific article with content, e.g. for detail page
  getArticleById(id) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('getArticleById');
        console.log(this.articlesSubject.getValue());
        // Gather all the articles (optimisation - this shouldn't always be necessary)
        this.loadAllTheArticles().then(articles => {
          // // We should really do this in the getAllTheArticles function, parsing it properly
          // this.articlesSubject = articles;
          // // Filter out the specific article we want
          const article = this.articlesSubject.getValue().find(_ => _.id == id); // NOT triple equals
          // Return it with the promise within .then()
          resolve(article);
        });
      }, 2000);
    });
  }

  // Search by title
  search(title) {
    return new Promise(resolve => {});
  }
}
