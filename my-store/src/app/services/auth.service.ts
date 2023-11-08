import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Token,User } from '../models/user.model';
import { switchMap, tap } from 'rxjs/operators';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url  = 'https://young-sands-07814.herokuapp.com/api/'
  constructor(
    private http:HttpClient,
    private tokenService:TokenService
  ) { }
  login(email:string,password:string){
    return this.http.post<Token>(`${this.url}auth/login`,{email,password})
    .pipe(
      tap(response=>this.tokenService.saveToken(response.access_token))
    )
  }
  profile(){
    // const headers = new HttpHeaders
    // headers.set('Authorization',`Bearer ${token}`)

    return this.http.get<User>(`${this.url}auth/profile`,{
      // headers:{
      //   Authorization: `Bearer ${token}`
      // }
    }
  )}

  loginGet(email:string,password:string){
    return this.login(email,password)
    .pipe(
      switchMap(()=>this.profile())
    )
  }
}
