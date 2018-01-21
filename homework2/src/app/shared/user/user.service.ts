import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class UserService {
options: RequestOptions;
  constructor(
    private http: Http
  ) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + sessionStorage.getItem('auth_token')
    });
    this.options = new RequestOptions({headers: headers});
  }

  login(user): Observable<any> {
    const bodySting = JSON.stringify(user);
    return this.http.post('http://203.151.27.183:9590/api/v1/login/doLogin', bodySting , this.options)
    .map(res => res.json())
    .do(res => {
      if (res.success) {
        sessionStorage.setItem('auth_token', res.auth_token);
        sessionStorage.setItem('userName', res.userName);
      }
    });
  }
}
