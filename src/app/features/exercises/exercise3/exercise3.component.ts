import { Component, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EXERCICI_3 } from '@core/constants/messages';
import { CardComponent } from '@ui/card/card.component';

@Component({
  selector: 'app-exercise3',
  standalone: true,
  imports: [CardComponent, ReactiveFormsModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './exercise3.component.html',
  styleUrl: './exercise3.component.scss'
})
export class Exercise3Component implements OnInit {

  public names = ['Alba', 'Aleix', 'Sergi', 'Anna', 'Guillem', 'Pablo', 'Natalia', 'Arnau', 'Daniel', 'Imad'];
  public surnames = ['Agustí', 'Grasiot', 'Soler', 'Galianmo', 'Hamdi', 'Colomer', 'Font']

  public namesGon = ['Alba', 'Imad', 'Arnau'];
  public surnamesGon = ['Agustí', 'Hamdi', 'Colomer'];

  public namesFormControl = new FormControl('', {nonNullable: true});
  public surnamesFormControl = new FormControl('', {nonNullable: true});

  public message = signal<string>(EXERCICI_3);
  public nomFinal = signal('');

  ngOnInit(): void {
    this.listenChanges();
  }

  private listenChanges() {
    // Per escoltar canvis d'un formControl és així: this.namesFormControl.valueChanges
  }
}
