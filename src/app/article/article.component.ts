import { Component, OnInit } from "@angular/core";

import { ArticleService } from "../article.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private ArticleService: ArticleService
  ) {
    console.log("Do something here.. I'm not sure what");
  }
  ngOnInit() {
    let sub = this.route.params.subscribe(params => {
      console.log(params);
    });
  }
}
