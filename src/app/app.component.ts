import { Component } from '@angular/core';
import { songCatalogue } from '../data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'playlist';

  songs = songCatalogue;
}
