import { NgClass, UpperCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
} from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-entity-general-data',
  standalone: true,
  imports: [UpperCasePipe, MatProgressSpinnerModule, NgClass],
  templateUrl: './entity-general-data.component.html',
  styleUrl: './entity-general-data.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityGeneralDataComponent {
  loading = model.required<boolean>();

  showGrid = input<boolean>(true);
  gridColumns = input<number>(5);
  gridTitle = input<string>('general.generalData');
  gridSubtitle = input<string>('');
  infoGridMaxWidth = input<string>('100%');
  classname = input<string>('');

  rowGap = input<string>('45px');
}
