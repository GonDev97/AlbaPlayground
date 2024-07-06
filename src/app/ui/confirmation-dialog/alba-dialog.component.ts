import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-alba-dialog',
  standalone: true,
  imports: [MatDialogModule, MatLabel, MatButtonModule],
  templateUrl: './alba-dialog.component.html',
  styleUrl: './alba-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbaDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dialogRef: MatDialogRef<AlbaDialogComponent>
  ) {}
}
