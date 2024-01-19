import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Song } from '../../song.model';
import { StorageService } from '../../../storage.service';

@Component({
  selector: 'app-my-songs',
  templateUrl: './my-songs.component.html',
  styleUrl: './my-songs.component.scss',
})
export class MySongsComponent {
  @Input() mySongs: Song[] = [];

  @Output() songSelected = new EventEmitter<Song>();

  mySelectedSong: {
    id: string;
    interpret: string[];
    title: string;
    release_date: string;
    duration_ms: number;
    album: string;
    genre: string;
    image: string;
  } = {
    id: '',
    interpret: [],
    title: '',
    release_date: '',
    duration_ms: 0,
    album: '',
    genre: '',
    image: '',
  };

  constructor(private storageService: StorageService) {}

  onSongSelect() {
    this.songSelected.emit({
      id: this.mySelectedSong.id,
      interpret: this.mySelectedSong.interpret,
      title: this.mySelectedSong.title,
      release_date: this.mySelectedSong.release_date,
      duration_ms: this.mySelectedSong.duration_ms,
      album: this.mySelectedSong.album,
      genre: this.mySelectedSong.genre,
      image: this.mySelectedSong.image,
    });
  }

  onDeleteSong(song: Song, i: number) {
    this.mySongs.splice(i, 1);
    this.storageService.setItem('mySongs', this.mySongs);
  }
}
