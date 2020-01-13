import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ModalService} from '../../_modal';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  bodyText = 'This is a test test !!!';
  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      corpCode: new FormControl('Blue Cross Blue Shield Of IL'),
      subscriberId: new FormControl(null),
      groupNumber: new FormControl(null),
      sectionNumber: new FormControl(null),
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      dateOfBirth: new FormControl(null),
      relation: new FormControl('Relationship'),
      gender: new FormControl('Gender'),
      benefitStartDate: new FormControl(null),
      benefitEndDate: new FormControl(null)
    });
    this.modalService.close('custom-modal-1');

  }

  onSubmit() {
    console.log(this.searchForm);
    // if(!this.searchForm.valid){
    this.modalService.open('custom-modal-1');
    // }
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
