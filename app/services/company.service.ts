import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AuthenticationService } from '../services/authentication.service';
import { Company } from '../models/Company';

@Injectable()
export class CompanyService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    getCompanies(): Observable<Company[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        // get companies from api
        return this.http.get('/api/company/list', options)
            .map((response: Response) => response.json().data);
    }
}
