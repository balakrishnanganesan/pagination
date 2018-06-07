import { Component } from '@angular/core';
import { GlobalService } from './../services/global-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  comments: Array<any>;
  //Inputs to pagination control
  totalRecords: number = 0;
  defaultPageSize: number = 5;
  

  constructor( private globalService: GlobalService ) {
    //The initial page number is 1
    const initPageNumber: number = 1;
    this.getComments(this.defaultPageSize, initPageNumber);
  }

  //Output event emitter
  OnNavButtonClick = function(op) {
    this.getComments(op.pageSize, op.pageNo);
  }

  getComments(pageSize, pageNo) {
    const dataFromApi = this.globalService.getComments(pageSize, pageNo);
    this.comments = dataFromApi.data;
    this.totalRecords = dataFromApi.totalRecords;
  }
}
