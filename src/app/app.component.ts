import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['h1 span { color: #026ecc; }', 'h1 { margin-top: 1rem; }']
})
export class AppComponent {
  isDev: boolean = !environment.production;
  title = 'Kup dom';
}