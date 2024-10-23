import { Component, Input } from '@angular/core';
import { SocialMedia } from './models/SocialMedia.model';
import { MatTooltipModule } from '@angular/material/tooltip'
import { NgOptimizedImage } from '@angular/common';
import { WobbleDirective } from '../../../src/components';

@Component({
  selector: 'app-social-media-element',
  standalone: true,
  imports: [MatTooltipModule, NgOptimizedImage,WobbleDirective],
  templateUrl: './social-media-element.component.html',
  styleUrl: './social-media-element.component.scss'
})
export class SocialMediaElementComponent {
  @Input() socialMedia: SocialMedia = {
    name: '',
    link:'',
    imgPath:''
  };
}
