import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  SIDE_MENU_OPTIONS,
  SideMenuOption,
} from '@core/constants/side-menu-options.constant';
@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
  public menuOptions: SideMenuOption[] = SIDE_MENU_OPTIONS;
}
