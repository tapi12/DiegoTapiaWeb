import { Component } from '@angular/core';
import { SocialMediaElementComponent } from './social-media-element/social-media-element.component';
import { SocialMedia } from './social-media-element/models/SocialMedia.model';
import { MainContainerComponent } from '../../src/components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [SocialMediaElementComponent, MainContainerComponent, CommonModule],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {
  socialMediaE: SocialMedia[] = [
    {
      name: 'linkedIn',
      link: 'https://www.linkedin.com/in/diego-tapia-sánchez-b6688a291',
      imgPath: '/assets/images/linkedInLogo.png'
    },
    {
      name: 'GitHub',
      link: 'https://github.com/tapi12',
      imgPath: '/assets/images/githubLogo.png'
    }
  ]
}
