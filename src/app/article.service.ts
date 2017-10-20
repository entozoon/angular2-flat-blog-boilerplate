import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ArticleService {
  constructor(public http: Http) {}

  // Function returning a promise which, when resolved, returns the articles as an object array
  public getTheArticles() {
    return new Promise(resolve => {
      this.http.get('assets/articles.json').subscribe(response => {
        resolve(response.json());
      });
    });
  }
}
