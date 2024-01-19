export class Song {
  id: string;
  interpret: string[];
  title: string;
  release_date: string;
  duration_ms: number;
  album: string;
  genre: string;
  image: string;

  constructor(
    id: string,
    interpret: string[],
    title: string,
    release_date: string,
    duration_ms: any,
    album: any,
    genre: any,
    image: any
  ) {
    this.id = id;
    this.interpret = interpret;
    this.title = title;
    this.release_date = release_date;
    this.duration_ms = duration_ms;
    this.album = album;
    this.genre = genre;
    this.image = image;
  }
}
