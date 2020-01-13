import {Component, OnInit} from '@angular/core';
import {SearchResult} from '../../search.result';
import {MemberDataService} from '../../member.data.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  providers: [MemberDataService]
})
export class SearchResultsComponent implements OnInit {
  searchResult: SearchResult[] = [];


  constructor(private memberDataService: MemberDataService) {
  }

  ngOnInit() {
    this.searchResult = this.memberDataService.getData();
  }

}
