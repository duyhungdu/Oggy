import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { APP_CONFIG, IAppConfig } from '../configs'
import { Observable } from 'rxjs/Observable';
import {URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class APIService {

    constructor(private _http: Http, @Inject(APP_CONFIG) private config: IAppConfig) {
    }

    get(url: string, requestParams): Observable<any> {
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        let apiParams = new URLSearchParams();
        let keys = Object.keys(requestParams);

        keys.forEach((key) => {
           apiParams.append(key.toString(), requestParams[key].toString());
           
        });
       
        let options = new RequestOptions({ headers: myHeaders, params: apiParams });
        
        return this._http.get(this.config.endpoint.api + url, options).map(response => response.json());
    }
}
