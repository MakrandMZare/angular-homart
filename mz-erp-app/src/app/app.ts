import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template:`
  <div class="container">
  <router-outlet></router-outlet>
  </div>
  `,
  styleUrl:'./app.scss'
})

export class App {
  protected readonly title = signal('mz-erp-app');
}
