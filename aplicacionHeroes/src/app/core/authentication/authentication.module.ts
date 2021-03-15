import { MaterialModule } from './../../material/material.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class AuthenticationModule { }
