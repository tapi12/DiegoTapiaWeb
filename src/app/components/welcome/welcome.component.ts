import { Component } from '@angular/core';
import { MainContainerComponent } from '../../src/components';
import { FadeInDirective } from '../../src/components';
import { CommonModule } from '@angular/common';
import { TrailerVideoComponent } from '../../src/trailer-video';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [MainContainerComponent, FadeInDirective, CommonModule, TrailerVideoComponent, HttpClientModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}
