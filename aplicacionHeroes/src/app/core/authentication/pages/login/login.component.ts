import { User } from './../../interface/user.interface';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(public authService: AuthenticationService) { }

  user: User = {
    email:'',
    rol: '',
    usuario: ''
  }

  login(){
    console.log(this.user);
    this.authService.login(this.user.email as string);
  }

}
