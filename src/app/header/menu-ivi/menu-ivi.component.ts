import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '../header';

@Component({
  selector: 'app-menu-ivi',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    NgbNavModule, 
    NgbDropdownModule, 
    HeaderComponent],
  templateUrl: './menu-ivi.component.html',
  styleUrls: ['./menu-ivi.component.scss']
})
export class MenuIviComponent {

}
