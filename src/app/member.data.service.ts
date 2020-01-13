import {SearchResult} from './search.result';

export class MemberDataService {
  searchResult: SearchResult[] =  [
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
    }
   ,
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

  getData() {
    return this.searchResult;
  }

}
