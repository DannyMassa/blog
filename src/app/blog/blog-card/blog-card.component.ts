import { Component, Input, OnInit } from '@angular/core';
import { ArticleMetadata } from '../../../models/objects/article-metadata/article-metadata';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  @Input() articleData: ArticleMetadata;

  constructor() { }

  ngOnInit(): void {
  }

}
