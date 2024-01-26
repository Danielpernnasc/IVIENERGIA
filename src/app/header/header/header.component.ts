import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImagePaths } from 'src/app/image/imagen.enun';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  LogoIVI = ImagePaths;
  @Input() MostrarData: boolean = true;

  public dataAtual: Date;
  @Input() mostarLink: boolean = false; 
  @Input() semLink: boolean = true;
 
  constructor(){
    this.dataAtual = new Date();
  

  }

  
}
