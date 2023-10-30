import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token,User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url  = 'https://young-sands-07814.herokuapp.com/api/'
  constructor(
    private http:HttpClient
  ) { }
  login(email:string,password:string){
    return this.http.post<Token>(`${this.url}auth/login`,{email,password})
  }
  profile(token:string){
    return this.http.get<User>(`${this.url}auth/profile`)
  }
}
