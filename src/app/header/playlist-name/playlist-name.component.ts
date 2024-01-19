import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playlist-name',
  templateUrl: './playlist-name.component.html',
  styleUrl: './playlist-name.component.scss',
})
export class PlaylistNameComponent {
  @Input() playlistName: string;
}
