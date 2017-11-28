import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

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
      this.loadAllTheArticles()
        .then(articles => {
          // Filter out the specific article we want
          const article = this.articles.find(_ => _.id == id); // NOT triple equals
          return article;
        })
        .then(article => {
          // Replace article content from .html file if given a filepath
          this.getContentForArticle(article.content).then(content => {
            article.content = content;
            return article;
          });
          return article;
        })
        .then(article => {
          resolve(article);
        });
    });
  }

  // Get article content from html file using given filepath
  getContentForArticle(filepath) {
    filepath = '.' + filepath; // use relative paths, so can be deployed in a sub dir (like gh-pages)

    return new Promise(resolve => {
      console.log('..getting seriously mad now: ' + filepath);
      console.log(window.location.href + '' + filepath);

      this.http
        .get(filepath)
        .map(res => res)
        .subscribe(
          res => {
            console.log(res);
            resolve(res['_body']);
          },
          err => {
            // console.log(
            //   'Content for article not found in filepath: ' + filepath
            // );
            console.log(err);
          }
        );
    });
  }

  // Search for the query within the article titles (ignoring case)
  search(searchQuery) {
    return this.articles.filter(article => {
      return article.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }
}
