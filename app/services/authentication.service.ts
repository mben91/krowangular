import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http, private router: Router) {
        // set token if saved in local storage
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    login(email: string, password: string): Observable<boolean> {
        return this.http.post('/api/authenticate/login', { email : email, password : password } )
                        .map((response: Response) => {
                            if (response.status < 200 || response.status >= 300 || response.json().hasOwnProperty('error')) {
                                // throw new Error('This request has failed: ' + response.status);
                                return false;
                            }
                            // login successful if there's a jwt token in the response
                            let data  = response.json();
                            let token = data && data.token;
                            // let role  = response.json() && response.json().role;
                            if (token) {
                                // set token property
                                this.token = token;

                                // store user and token in local storage to keep user logged in between page refreshes
                                localStorage.setItem('currentUser', JSON.stringify(data));

                                // return true to indicate successful login
                                return true;
                            } else {
                                // return false to indicate failed login
                                return false;
                            }
                        });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }
}
