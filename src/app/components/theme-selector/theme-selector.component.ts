import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {ThemeService} from "../../../themes/theme.service";

@Component({
  selector: 'app-theme-selector',
  standalone: true,
  imports: [
    ButtonModule
  ],
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.css'
})
export class ThemeSelectorComponent {
  icons: string[];
  themes: string[];
  iconSelected: string;
  flag: boolean;

  constructor(private _themeService: ThemeService) {
    this.icons = ['pi pi-moon', 'pi pi-sun'];
    this.themes = ['lara-light', 'lara-dark'];
    this.iconSelected = this.icons[0];
    this.flag = false;
  }

  changeTheme() {
    this.flag = !this.flag;
    this.iconSelected = this.icons[this.flag ? 1 : 0];
    const theme = this.themes[this.flag ? 1 : 0];

    this._themeService.switchTheme(theme);
  }
}
