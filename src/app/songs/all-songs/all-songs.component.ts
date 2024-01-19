import { Component, Input } from '@angular/core';
import { Song } from '../song.model';
import { StorageService } from '../../storage.service';

@Component({
  selector: 'app-all-songs',
  templateUrl: './all-songs.component.html',
  styleUrl: './all-songs.component.scss',
})
export class AllSongsComponent {
  @Input() allSongs: Song[];
  mySongs: Song[] = [];

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    // Load the stored array from local storage when the component initializes
    const storedSongs = this.storageService.getItem('mySongs');

    if (storedSongs) {
      this.mySongs = storedSongs;
    } else {
      this.mySongs = [];
    }
  }

  onAddSong(song: Song) {
    console.log(song);
    this.mySongs.push(song);
    this.storageService.setItem('mySongs', this.mySongs);
  }
}
