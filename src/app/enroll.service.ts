import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/user';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  _url="http://localhost:3000/enrollment";
  constructor(private http:HttpClient) { }
  enroll(user:User)
  {
     return this.http.post<any>(this._url,user);
  }
}
