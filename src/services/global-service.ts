
import {throwError as observableThrowError, Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Injectable, Inject} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Comment, sampleCommentList } from './../data/data';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  getComments(pagesize: number, pagenumber: number): any {
    const locSampleCommentList = sampleCommentList;
    const dataFromDb = this.paginate(locSampleCommentList, pagesize, pagenumber-1);

    return { 
              data: dataFromDb, 
              totalRecords: 20 
            };
  }

  paginate(arr: Array<Comment>, pagesize, pagenumber) {
    
    return arr.slice(pagenumber * pagesize, (pagenumber + 1) * pagesize);
  }

}



