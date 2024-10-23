import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatMenuModule, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  encapsulation: ViewEncapsulation.None //elimina los estilos por defecto que restringen modificar ciertos valores
})
export class MenuComponent {

}
