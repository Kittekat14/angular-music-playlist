import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlaylistNameComponent } from './header/playlist-name/playlist-name.component';
import { AllSongsComponent } from './songs/all-songs/all-songs.component';
import { MySongsComponent } from './songs/all-songs/my-songs/my-songs.component';
import { FormsModule } from '@angular/forms';
import { StorageService } from './storage.service';
import { OneSongComponent } from './songs/one-song/one-song.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlaylistNameComponent,
    AllSongsComponent,
    MySongsComponent,
    OneSongComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [StorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
