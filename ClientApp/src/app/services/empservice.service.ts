import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map, filter, scan, catchError } from 'rxjs/operators';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class VeterinaryService {
  queryApiUrl: string = "";
  controllerBaseApi: string = "";

  constructor(private _http: Http) {
    this.queryApiUrl = "https://localhost:44372/api/core";
  }

  getPersonList() {
    var query = {
      "query": "query {personList { id name lastName miemployee pets { petId petName type { typeId typeName } } } }"
    };

    return this._http.post(this.queryApiUrl, query)
      .pipe(map(res => res.json()));
  }

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }  
}
