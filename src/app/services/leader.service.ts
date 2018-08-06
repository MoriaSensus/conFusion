import { Injectable } from '@angular/core';
import { Leader } from 'src/app/shared/leader';
import { LEADERS } from 'src/app/shared/leaders';
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
export class LeaderService {

  constructor(private restangular: Restangular) { }

  getLeaders(): Observable<Leader[]> {
    return this.restangular.all('leaders').getList();
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.restangular.all('leaders').getList({featured: true})
    .pipe(map(leaders => leaders[0]));
  }
}