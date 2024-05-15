import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessagesComponent } from './presentation/ui/messages/messages.component';
import { SpinnerComponent } from './presentation/ui/spinner/spinner.component';
import { HeaderComponent } from './presentation/ui/layout/header/header.component';
import { MainComponent } from './presentation/ui/layout/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MessagesComponent,
    SpinnerComponent,
    HeaderComponent,
    MainComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-start-project';

  constructor() {}
}
