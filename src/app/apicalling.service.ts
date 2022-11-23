import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as appSettings from './Store/AppSettings/AppSettings';
import { catchError, Observable, timeout } from 'rxjs';
import * as $ from 'jquery';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ApicallingService {
  path = appSettings.api;

  constructor(private router: Router, private httpClient: HttpClient) {}

  getPaperMaster(): Observable<any> {
    debugger;
    try {
      debugger;
      return this.httpClient.get<any>(this.path + 'papermaster', {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        })
        .pipe(
          timeout(120000),
          catchError((err) => {
            debugger;
            console.log('error ' +err)
            if (err.message.indexOf('Http failure response for') > 0) {
              return null;
            }
            debugger;
          })
        );
        debugger;
    } catch (err) {
      throw err;
    }
  }
}
