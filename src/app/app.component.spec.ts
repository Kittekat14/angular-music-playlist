import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllSongsComponent } from './songs/all-songs/all-songs.component';
import { MySongsComponent } from './songs/all-songs/my-songs/my-songs.component';
import { PlaylistNameComponent } from './header/playlist-name/playlist-name.component';
import { OneSongComponent } from './songs/one-song/one-song.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        PlaylistNameComponent,
        OneSongComponent,
        AllSongsComponent,
        MySongsComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const component = TestBed.createComponent(AppComponent);
    const app = component.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'playlist'`, () => {
    const component = TestBed.createComponent(AppComponent);
    const app = component.componentInstance;
    expect(app.title).toBe('playlist');
  });
});
