import { Component, Input } from '@angular/core';
import { Song } from '../song.model';

@Component({
  selector: 'app-one-song',
  templateUrl: './one-song.component.html',
  styleUrl: './one-song.component.scss',
})
export class OneSongComponent {
  @Input() mySong: Song;
}
