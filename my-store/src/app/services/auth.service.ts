import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
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
    // const headers = new HttpHeaders
    // headers.set('Authorization',`Bearer ${token}`)
    return this.http.get<User>(`${this.url}auth/profile`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    }
  )}
}
