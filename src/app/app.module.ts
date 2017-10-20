import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms'; // for (ngModel)

import { AppComponent } from './app.component';
import { ArticleListComponent } from './article/article-list.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [AppComponent, ArticleListComponent, ArticleComponent],
  imports: [BrowserModule, HttpModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
