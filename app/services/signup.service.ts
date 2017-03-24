import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import 'rxjs/add/operator/map';

@Injectable()
export class SignupService {
    public token: string;

    constructor(private http: Http, private router: Router) {}

    signupCandidat(model: User): Observable<boolean> {
        return this.http.post('/api/user/signup-candidat', model)
                        .map((response: Response) => {
                            if (response.status < 200 || response.status >= 300 || response.json().hasOwnProperty('error')) {
                                // throw new Error('This request has failed: ' + response.status);
                                return false;
                            }

                            return true;
                        });
    }

    signupRecruter(model: User): Observable<boolean> {
        return this.http.post('/api/user/signup-recruteur', model)
                        .map((response: Response) => {
                            if (response.status < 200 || response.status >= 300 || response.json().hasOwnProperty('error')) {
                                // throw new Error('This request has failed: ' + response.status);
                                return false;
                            }

                            return true;
                        });
    }
}
