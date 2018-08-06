import { Injectable } from '@angular/core';
import { Feedback } from 'src/app/shared/feedback';
import { Observable } from 'rxjs/Observable';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service'; 
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Restangular } from 'ngx-restangular';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})

export class FeedbackService {

  constructor(private restangular: Restangular) { }

  submitFeedback(feedback:Feedback): Observable<any> {
    return this.restangular.all('Feedback').post(feedback);
  }
}
