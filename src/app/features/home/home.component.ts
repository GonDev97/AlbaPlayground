import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { WELCOME_MESSAGE } from '@core/constants/messages';
import { CardComponent } from '@ui/card/card.component';
import { MessageDialogComponent } from '@ui/message-dialog/message-dialog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, MatButtonModule, RouterLink, MessageDialogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public message = signal<string>(WELCOME_MESSAGE);
  public router = inject(Router);
  public dialog = inject(MatDialog);

  public angularClick() {
    this.router.navigate(['/exercise1']);
  }

  public reactClick() {
    this.dialog.open(MessageDialogComponent, {
      width: '50%',
      data: {
        title: 'React',
        message: 'Vamos no me jodas'
      }
    })
  }

  public vueClick() {
    this.dialog.open(MessageDialogComponent, {
      width: '50%',
      data: {
        title: 'Vue',
        message: 'He visto gente ir a la cárcel por menos'
      }
    })
  }
}
