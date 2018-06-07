
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
    //This function should call RESTFul API using observables.
    //For demo we used the static data from a constant Array list

    const locSampleCommentList = sampleCommentList;
    const dataFromDb = this.paginate(locSampleCommentList, pagesize, pagenumber-1);

    return { 
              data: dataFromDb, 
              totalRecords: locSampleCommentList.length 
            };
  }

  paginate(arr: Array<Comment>, pagesize, pagenumber) {

    return arr.slice(pagenumber * pagesize, (pagenumber + 1) * pagesize);
  }

}



