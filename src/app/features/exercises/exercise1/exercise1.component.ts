import { AfterViewInit, Component, effect, ElementRef, inject, OnInit, Signal, signal, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { EXERCICI_1 } from '@core/constants/messages';
import { CountriesService } from '@core/services/countries.service';
import { CardComponent } from '@ui/card/card.component';
import { concatMap, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-exercise1',
  standalone: true,
  imports: [CardComponent, MatButtonModule],
  templateUrl: './exercise1.component.html',
  styleUrl: './exercise1.component.scss'
})
export class Exercise1Component implements OnInit {

  public message = signal<string>(EXERCICI_1);

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
