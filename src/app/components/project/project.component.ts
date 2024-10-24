import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  selectedInfo: string | null = null;

  showInfo(info: string) {
    this.selectedInfo = this.selectedInfo === info ? null : info;
  }
}
