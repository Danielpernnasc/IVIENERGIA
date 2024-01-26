import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/header';
import { ImagePaths } from 'src/app/image';

import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../service/authentication.service';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FormsModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent{
  logoCentral = ImagePaths.LogoIVI4
  IconeUsuario = ImagePaths.iconeUsuario
  iconeLogar = ImagePaths.iconeLogar
  iconeReset = ImagePaths.iconeReset
 
  
  username: string = '';
  password: string = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/home']);
    } else if(this.username === null && this.password === null){
          alert('Preencha os dados');
    }else {
      alert('Usuário ou senha inválidos');
    }
  }
  resetForm(): void {
    this.username = '';
    this.password = '';
  }
 
 
  

 
}
