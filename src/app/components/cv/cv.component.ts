import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainContainerComponent } from '../../src/components';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule,MainContainerComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent {
  selectedInfo: string | null = null;

  showInfo(info: string) {
    this.selectedInfo = this.selectedInfo === info ? null : info;
  }
}
