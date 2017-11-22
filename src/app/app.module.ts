import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms'; // for (ngModel)

import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { PageNotFoundComponent } from './page-not-found.component';

import { ArticleService } from './article.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleComponent,
    PageNotFoundComponent
  ],
  imports: [BrowserModule, HttpModule, FormsModule, AppRoutingModule],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
