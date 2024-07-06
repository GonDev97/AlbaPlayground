import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { EXERCICI_2 } from '@core/constants/messages';
import { CountriesService } from '@core/services/countries.service';
import { CardComponent } from '@ui/card/card.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-exercise2',
  standalone: true,
  imports: [CardComponent, MatButtonModule],
  templateUrl: './exercise2.component.html',
  styleUrl: './exercise2.component.scss'
})
export class Exercise2Component {
  public message = signal<string>(EXERCICI_2);

  public $click = new Subject<void>();

  public countriesService = inject(CountriesService);


  ngOnInit(): void {
    this.listenClicks();
  }

  private listenClicks() {
    this.$click.pipe(
    ).subscribe((result) => {
      this.countriesService.getAllCountries().subscribe((result) => {
        console.log(result);
      })
    })
  }

}
