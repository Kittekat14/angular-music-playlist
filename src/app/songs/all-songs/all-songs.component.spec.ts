import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllSongsComponent } from './all-songs.component';
import { MySongsComponent } from './my-songs/my-songs.component';
import { StorageService } from '../../storage.service';
import { FormsModule } from '@angular/forms';
import { Song } from '../song.model';
import { OneSongComponent } from '../one-song/one-song.component';

describe('AllSongsComponent', () => {
  let component: AllSongsComponent;
  let fixture: ComponentFixture<AllSongsComponent>;
  let storageService: StorageService;

  beforeEach(async () => {
    // bundling the components needed like in the module.ts file, but for the testing environment now
    await TestBed.configureTestingModule({
      declarations: [AllSongsComponent, MySongsComponent, OneSongComponent],
      providers: [StorageService], // Provide StorageService
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AllSongsComponent);
    // fixture is the component, .componentInstance is the TS code,
    // .debugElement.nativeElement is the HTML elements (template)
    component = fixture.componentInstance;
    storageService = TestBed.inject(StorageService);
    fixture.detectChanges();
  });

  it('should increase the amount of mySongs array on button click', () => {
    component.mySongs = [];
    expect(component.mySongs.length).toBe(0);

    const song: Song = {
      id: '6WrI0LAC5M1Rw2MnX2ZvEg',
      interpret: ['Dua Lipa'],
      title: "Don't Start Now",
      release_date: '2019-10-31',
      duration_ms: 183290,
      album: "Don't Start Now",
      genre: 'pop',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Dua_Lipa_-_Don%27t_Start_Now.png/220px-Dua_Lipa_-_Don%27t_Start_Now.png',
    };

    component.onAddSong(song);

    expect(component.mySongs.length).toBe(1);
  });

  it('should load mySongs from local storage on component initialization', () => {
    const storedArray: Song[] = [
      {
        id: '1dNIEtp7AY3oDAKCGg2XkH',
        interpret: ['Coldplay', 'The Chainsmokers'],
        title: 'Something Just Like This',
        release_date: '2017-02-22',
        duration_ms: 247626,
        album: 'Something Just Like This',
        genre: 'Rock',
        image:
          'https://upload.wikimedia.org/wikipedia/en/5/57/Something_Just_Like_This.png',
      },
      {
        id: '0HqZX76SFLDz2aW8aiqi7G',
        interpret: ['Imagine Dragons'],
        title: 'Bones',
        release_date: '2022-03-11',
        duration_ms: 165264,
        album: 'Bones',
        genre: 'Rock',
        image:
          'https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Imagine_Dragons_Bones_cover.jpg/220px-Imagine_Dragons_Bones_cover.jpg',
      },
    ];

    spyOn(storageService, 'getItem').and.returnValue(storedArray);

    component.ngOnInit();

    expect(component.mySongs).toEqual(storedArray);
  });

  it('should add a song to mySongs and update local storage on onAddSong', () => {
    const song: Song = {
      id: '5C8ySsx3AT121g24uYR823',
      interpret: ['Macklemore', 'Collett'],
      title: 'NO BAD DAYS (feat. Collett)',
      release_date: '2023-03-03',
      duration_ms: 173453,
      album: 'BEN',
      genre: 'Pop',
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/3/31/Macklemore_-_No_Bad_Days_%28Remix%29.jpg/220px-Macklemore_-_No_Bad_Days_%28Remix%29.jpg',
    };

    const storedArray: Song[] = [
      {
        "id": "6WrI0LAC5M1Rw2MnX2ZvEg",
        "interpret": ['Dua Lipa'],
        "title": "Don't Start Now",
        "release_date": '2019-10-31',
        "duration_ms": 183290,
        "album": "Don't Start Now",
        "genre": 'pop',
        "image":
          'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Dua_Lipa_-_Don%27t_Start_Now.png/220px-Dua_Lipa_-_Don%27t_Start_Now.png',
      },
    ];

    spyOn(storageService, 'getItem').and.returnValue(storedArray);
    spyOn(storageService, 'setItem');

    component.onAddSong(song);

    // expect(component.mySongs).toEqual([...storedArray, song]);
    expect(storageService.setItem).toHaveBeenCalledWith('mySongs', [
      ...storedArray,
      song,
    ]);
  });
});
