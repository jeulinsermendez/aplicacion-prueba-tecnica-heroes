import { User } from './../../interface/user.interface';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '../../service/authentication.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  user: User = {
    email:'',
    rol: '',
    usuario: ''
  }
  rols =[
    {
      id:'Admin',
      desc: 'Administrador de la web'
    },
    {
      id:'User',
      desc: 'Usuario de la web'
    },
  ];
  constructor( public authenticationService: AuthenticationService, private router: Router, private snackBar: MatSnackBar ) { }

  register(){
    if(this.user.usuario != '' && this.user.email != '' && this.user.rol != ''){

      this.authenticationService.register(this.user).subscribe( registerUser =>{
        if(registerUser){
          this.snackBar.open('Se ha registrado el usuario '+registerUser.usuario, 'Usuario registrado', {
            duration: 2000,
          });
        }
        this.router.navigate(['/auth/login']);

      });
    }

  }


}
