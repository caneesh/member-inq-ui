import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searchResult: [{ lastName: string; address: string; gender: string; endDate: string; prefix: string; sectionNumber: string; groupNumber: string; keyChange: string; firstName: string; dob: string; relCode: string; subscriberNumber: string; id: number; effectiveDate: string }, { lastName: string; address: string; gender: string; endDate: string; prefix: string; sectionNumber: string; groupNumber: string; keyChange: string; firstName: string; dob: string; relCode: string; subscriberNumber: string; id: number; effectiveDate: string }, { lastName: string; address: string; gender: string; endDate: string; prefix: string; sectionNumber: string; groupNumber: string; keyChange: string; firstName: string; dob: string; relCode: string; subscriberNumber: string; id: number; effectiveDate: string }];


  constructor() { }

  ngOnInit() {
    this.searchResult =  [
      {
        id: 1,
        lastName: 'BOWEN',
        firstName: 'PHILICIA',
        gender: 'Female',
        dob: '07/16/2002',
        relCode: 'DEP',
        groupNumber: '189421',
        sectionNumber: '0024',
        subscriberNumber: '000000000187',
        prefix: 'CTY',
        effectiveDate: '01/01/2017',
        endDate: '12/31/9999',
        keyChange: 'Y',
        address: '8532 S PHILLIPS, CHICAGO, IL. 60617233'
      },
      {
        id: 2,
        lastName: 'BOWEN',
        firstName: 'PHILICIA',
        gender: 'Female',
        dob: '07/16/2002',
        relCode: 'DEP',
        groupNumber: '189421',
        sectionNumber: '0024',
        subscriberNumber: '000000000187',
        prefix: 'CTY',
        effectiveDate: '01/01/2017',
        endDate: '12/31/9999',
        keyChange: 'Y',
        address: '8532 S PHILLIPS, CHICAGO, IL. 60617233'
      },
      {
        id: 3,
        lastName: 'BOWEN',
        firstName: 'PHILICIA',
        gender: 'Female',
        dob: '07/16/2002',
        relCode: 'DEP',
        groupNumber: '189421',
        sectionNumber: '0024',
        subscriberNumber: '000000000187',
        prefix: 'CTY',
        effectiveDate: '01/01/2017',
        endDate: '12/31/9999',
        keyChange: 'Y',
        address: '8532 S PHILLIPS, CHICAGO, IL. 60617233'
      }
    ];
  }

}
