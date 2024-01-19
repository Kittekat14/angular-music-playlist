import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  playlistName: string = 'Playlist Maker';

  editInputVisible: boolean = false;

  onEditPlaylistName() {
    this.editInputVisible = !this.editInputVisible;
  }
}
