import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuIviComponent } from 'src/app/header';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, MenuIviComponent]
})
export class HomeComponent {

}
