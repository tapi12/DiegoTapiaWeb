import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContainerComponent } from './src/components';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { TrailerVideoComponent } from './src/trailer-video';
import { SpotifyComponent } from './components/spotify/spotify.component';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, MainContainerComponent, WelcomeComponent, SocialMediaComponent, TrailerVideoComponent, SpotifyComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyectTapi';

  
}
