
export interface User {
  email:string,
  name:string,
  password:string,
  id:number
}

export interface UserCreateDTO extends Omit<User, 'id'>{}

export interface Token{
  access_token:string
}
