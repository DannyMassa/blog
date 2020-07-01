import { Component, OnInit } from '@angular/core';
import { ArticleMetadata } from '../../models/objects/article-metadata/article-metadata';

// @ts-ignore
import articles from 'src/assets/articles.json';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public articles: ArticleMetadata[];
  constructor() { }

  ngOnInit(): void {
    this.articles = articles.data;
  }

}
