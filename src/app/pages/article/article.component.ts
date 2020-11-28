import { Component, OnInit } from '@angular/core';
import { Article, ARTICLES } from 'src/app/core/data/article';

@Component({
  selector: 'app-article',
  template: `
    <div class="main-content-wrapper">
      <div class="content">
        <h3>Articles</h3>
        <p>I have written few articles about the technology I use</p>
        <div class="article">
          <div class="article-text-div">
            <div class="article-container" *ngFor="let article of articles">
              <a class="article-card" target="_blank" href="{{article.url}}">
                <h3 class="article-title">{{article.title}}</h3>
                <p class="small">{{article.description}}</p>
                <div class="go-corner">
                  <div class="go-arrow">→</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ArticleComponent implements OnInit {

  articles: Article[];

  ngOnInit(): void {
    this.articles = ARTICLES;
  }

}
