import { Component, Input, inject } from '@angular/core';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-iframe-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iframe-video.component.html',
  styleUrl: './iframe-video.component.scss'
})
export class IframeVideoComponent {
  //injects: 
  domeSanitizer = inject(DomSanitizer);

  // @s
  @Input() set videoSrc(value: string){
    this._videoSrc = this.domeSanitizer.bypassSecurityTrustResourceUrl(value);
  }

  //variables
  _videoSrc: SafeResourceUrl = '';
}
