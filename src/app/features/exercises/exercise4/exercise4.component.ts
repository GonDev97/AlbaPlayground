import { Component, inject, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EXERCICI_4 } from '@core/constants/messages';
import { Country } from '@core/interfaces/country';
import { CountriesService } from '@core/services/countries.service';
import { CardComponent } from '@ui/card/card.component';

@Component({
  selector: 'app-exercise4',
  standalone: true,
  imports: [CardComponent, 
    MatAutocompleteModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,],
  templateUrl: './exercise4.component.html',
  styleUrl: './exercise4.component.scss'
})
export class Exercise4Component {

  public autocompleteControl = new FormControl<string>('');

  public countriesToShow = signal<Country[]>([]);

  public message = signal<string>(EXERCICI_4);
  public countrySeleccionat = signal<string>('');

  public countriesService = inject(CountriesService);

  ngOnInit(): void {
    this.listenChanges();
  }

  private listenChanges() {
    // Per escoltar canvis d'un formControl és així: this.namesFormControl.valueChanges
  }

  public optionSelected(option: string) {
    this.countrySeleccionat.set(option);
  }
}
