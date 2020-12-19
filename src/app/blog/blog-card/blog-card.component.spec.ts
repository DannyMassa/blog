import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCardComponent } from './blog-card.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterTestingModule} from '@angular/router/testing';
import {ArticleMetadata} from '../../../models/objects/article-metadata/article-metadata';

describe('BlogCardComponent', () => {
  let component: BlogCardComponent;
  let fixture: ComponentFixture<BlogCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatIconModule,
        MatCardModule,
        MatToolbarModule
      ],
      declarations: [
        BlogCardComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCardComponent);
    component = fixture.componentInstance;

    component.articleData = new ArticleMetadata();
    component.articleData.description = 'very cool article';
    component.articleData.publishedDate = '12/19/2020';
    component.articleData.technologies = [];
    component.articleData.title = 'very cool java article';
    component.articleData.urlTitle = 'very-cool-java-article';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
