import { Component } from '@angular/core';
import { IframeVideoComponent, MainContainerComponent } from '../components';

@Component({
  selector: 'app-trailer-video',
  standalone: true,
  imports: [IframeVideoComponent, MainContainerComponent],
  templateUrl: './trailer-video.component.html',
  styleUrl: './trailer-video.component.scss'
})
export class TrailerVideoComponent {
  videoSrc = 'https://www.youtube.com/embed/tHRjHZsO5Fw?si=IogUA9LilO7VZ4aI';
}
