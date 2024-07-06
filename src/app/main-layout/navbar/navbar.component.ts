import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MAT_MENU_DEFAULT_OPTIONS,
  MatMenuModule,
} from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    NgOptimizedImage,
    MatMenuModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: MAT_MENU_DEFAULT_OPTIONS,
      useValue: {
        overlayPanelClass: 'navbar-mat-menu',
      },
    },
  ],
})
export class NavbarComponent {

  private router = inject(Router);

  public logoClicked() {
    this.router.navigate(['/home']);
  }
}
