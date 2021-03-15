import { User } from './../../core/authentication/interface/user.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthBackService {

  private urlBase: string = environment.apiEndpoint;
constructor(private http: HttpClient) { }

searchForId(id: string):Observable<User>{
  return this.http.get<User>(`${this.urlBase}users/${id}`)
}
login(email: string):Observable<User>{ //http://localhost:3000/users?usuario=aa
  return this.http.get<User>(`${this.urlBase}users?email=${email}`)
}
register(user: User):Observable<User>{
  return this.http.post<User>(`${this.urlBase}users`, user)
}

}
