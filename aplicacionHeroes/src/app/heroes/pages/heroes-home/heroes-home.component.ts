import { User } from './../../../core/authentication/interface/user.interface';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication/service/authentication.service';
import{ tap }from 'rxjs/operators';

@Component({
  selector: 'app-heroes-home',
  templateUrl: './heroes-home.component.html',
  styleUrls: ['./heroes-home.component.css']
})
export class HeroesHomeComponent implements OnInit {

  userLogged!:User;
  isAdmin: boolean = false;


  constructor( private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authService.userLogin$
    .pipe(
      tap( userLogged => {
        if(userLogged.rol === 'Admin') this.isAdmin = true;
        else this.isAdmin = false;
      })
    ).subscribe( userLogged => this.userLogged = userLogged);
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['./auth']);
  }

}
