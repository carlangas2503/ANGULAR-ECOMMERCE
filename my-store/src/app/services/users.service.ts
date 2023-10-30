import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User,UserCreateDTO } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url  = 'https://young-sands-07814.herokuapp.com/api/'

  constructor(
    private http: HttpClient
  ) { }

  create(dto:UserCreateDTO){
    return this.http.post<User>(`${this.url}users`,dto)
  }
  getAll(){
    return this.http.get<User[]>(`${this.url}users`)
  }
}
