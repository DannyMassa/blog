import {Component, Input, OnInit} from '@angular/core';
import { ArticleMetadata } from '../../models/objects/article-metadata/article-metadata';
import { AppComponent } from '../app.component';
import { SearchService } from '../../services/search/search.service';

// @ts-ignore
import articles from 'src/assets/articles.json';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [AppComponent]
})
export class BlogComponent implements OnInit {

  search: string;
  articles: ArticleMetadata[];

  constructor(private searchService: SearchService) {
    this.searchService.subject.subscribe(message => {
      this.search = message;
    });
  }

  ngOnInit(): void {
    this.articles = articles.data;
  }
}
