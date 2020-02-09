import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IUser} from '../models/user';
import {ICrimes} from '../models/crimes';
import {Observable} from 'rxjs';

var cors = require('cors');

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  crimedata_api = 'https://be-aware-by-smarttech.herokuapp.com/home/getcrimedata';
  api = 'https://be-aware-by-smarttech.herokuapp.com/Signin';
  data;
  crimes;

  postdata(){
    return  this.http.post<IUser>(this.api, {title: 'User data'}).subscribe(data =>{this.data = data;})
  }
  getdata(): Observable<ICrimes> {
    return this.http.get<ICrimes>(this.crimedata_api);
  }
}
