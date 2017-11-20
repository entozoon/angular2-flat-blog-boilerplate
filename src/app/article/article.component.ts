import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  public article;

  constructor(
    private route: ActivatedRoute,
    private ArticleService: ArticleService
  ) {}

  ngOnInit() {
    // Get the parameter ID from URL
    const sub = this.route.params.subscribe(params => {
      // Get the article using that ID
      this.ArticleService.getArticleById(params.id).then(article => {
        // Save the article to this component here, for use in the template
        this.article = article;
      });
    });
  }
}
