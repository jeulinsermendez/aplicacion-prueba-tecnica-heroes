import { User } from './../interface/user.interface';
import { AuthBackService } from './../../../heroes/services/auth-back.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userLogin: BehaviorSubject<User> = new BehaviorSubject<User>({});
  userLogin$ = this.userLogin.asObservable();


constructor(private authDataService: AuthBackService, private router: Router) { }

login(email:string){
  this.authDataService.login(email).pipe(
    tap( (userLogged:any) => {
      if(userLogged[0]){
        localStorage.setItem('token', userLogged[0].id as string);
      }
    })
  ).subscribe(userLogin => {

    if(userLogin){
      this.userLogin.next(userLogin);
      this.router.navigate(['./heroes']);
    }

  });
}
logout(){
    this.userLogin.next({});
    localStorage.removeItem('token');
}
register(user: User){
 return  this.authDataService.register(user);
}

verifyAuthentication():Observable<boolean>{
  if(!localStorage.getItem('token')){
    return of(false);
  }
  return this.authDataService.searchForId(localStorage.getItem('token') as string)
  .pipe(
    map(userLogin => {
      this.userLogin.next(userLogin);
      return true;
    })
    );
}

}
