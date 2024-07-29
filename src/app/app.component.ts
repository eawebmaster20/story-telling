import { Component } from '@angular/core';
import { HomepageComponent } from './views/homepage/homepage.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomepageComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'interactive-storyteller';
}
