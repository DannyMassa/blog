import { Component, OnInit } from '@angular/core';
import { IconService } from '../services/icon/icon.service';
import { Links} from '../models/enum/links.enum';
import { SearchService } from '../services/search/search.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  search: string;

  constructor(private iconService: IconService, private searchService: SearchService) { }

  goToBuyMeACoffeeUrl(): void {
    (window as any).open(Links.buyMyACoffeeUrl, '_blank');
  }

  goToGitHubUrl(): void {
    (window as any).open(Links.gitHubUrl, '_blank');
  }

  goToLinkedInUrl(): void {
    (window as any).open(Links.linkedInUrl, '_blank');
  }

  goToDevUrl(): void {
    (window as any).open(Links.devUrl, '_blank');
  }

  ngOnInit(): void {
    this.iconService.registerIcons();
  }

  updateSearch() {
    this.searchService.subject.next(this.search);
  }
}
