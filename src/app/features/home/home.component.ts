import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { WELCOME_MESSAGE } from '@core/constants/messages';
import { CardComponent } from '@ui/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, MatButtonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public message = signal<string>(WELCOME_MESSAGE);
}
