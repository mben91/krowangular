import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Sector } from '../models/Sector';
import 'rxjs/add/operator/map';

@Injectable()
export class SectorsService {
    constructor(private http: Http) {}

    getSectors(): Observable<Sector | boolean> {
        return this.http.get('/api/activity-sector/list')
                        .map((response: Response) => {
                            if (response.status < 200 || response.status >= 300 || response.json().hasOwnProperty('error')) {
                                // throw new Error('This request has failed: ' + response.status);
                                return false;
                            } else {
                                return response.json().data;
                            }
                        });
    }

}
