
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './stage/main/main.component';


@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, MainComponent],
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,

})
export class AppComponent {

}
