import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { EXERCICI_5 } from '@core/constants/messages';
import { CountriesService } from '@core/services/countries.service';
import { CardComponent } from '@ui/card/card.component';
import { ConfirmationDialogComponent } from '@ui/confirmation-dialog/confirmation-dialog.component';
import { filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-exercise5',
  standalone: true,
  imports: [CardComponent, MatButtonModule],
  templateUrl: './exercise5.component.html',
  styleUrl: './exercise5.component.scss'
})
export class Exercise5Component {
  public message = signal<string>(EXERCICI_5);
  public dialog = inject(MatDialog);

  public countriesService = inject(CountriesService);

  public openDialog() {
    
  }
}
