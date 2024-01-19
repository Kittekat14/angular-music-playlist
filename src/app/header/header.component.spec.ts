import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { PlaylistNameComponent } from './playlist-name/playlist-name.component';
import { FormsModule } from '@angular/forms';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    // bundling the components needed like in the module.ts file, but for the testing environment now
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent, PlaylistNameComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    // fixture is the component, .componentInstance is the TS code,
    // .debugElement.nativeElement is the HTML elements (template)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create header component', () => {
    expect(component).toBeTruthy();
    expect(component.playlistName).toBe('Playlist Maker');
  });

  it('should toggle editInputVisible on button click', () => {
    const button = fixture.debugElement.nativeElement.querySelector('button');
    expect(component.editInputVisible).toBe(false);

    button.click();
    fixture.detectChanges();

    expect(component.editInputVisible).toBe(true);

    button.click();
    fixture.detectChanges();

    expect(component.editInputVisible).toBe(false);
  });

  it('should render app-playlist-name when editInputVisible is false', () => {
    const appPlaylistName =
      fixture.debugElement.nativeElement.querySelector('app-playlist-name');
    expect(appPlaylistName).toBeTruthy();
  });

  it('should render input when editInputVisible is true', () => {
    component.editInputVisible = true;
    fixture.detectChanges();

    const input = fixture.debugElement.nativeElement.querySelector('input');
    expect(input).toBeTruthy();
  });

  it('should not render input when editInputVisible is false', () => {
    component.editInputVisible = false;
    fixture.detectChanges();

    const input = fixture.debugElement.nativeElement.querySelector('input');
    expect(input).toBeFalsy();
  });
});
