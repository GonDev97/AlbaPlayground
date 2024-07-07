import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatLabel } from '@angular/material/form-field';
import { AlbaDialogComponent } from '@ui/confirmation-dialog/alba-dialog.component';

@Component({
  selector: 'app-message-dialog',
  standalone: true,
  imports: [MatDialogModule, MatLabel, MatButtonModule],
  templateUrl: './message-dialog.component.html',
  styleUrl: './message-dialog.component.scss'
})
export class MessageDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      message: string;
    },
    public dialogRef: MatDialogRef<AlbaDialogComponent>
  ) {}
}