import { Component } from '@angular/core';
import { MenuConfigService } from './menu-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  isCollapsed = false;

  constructor(public menuService: MenuConfigService) {}
  get menus() {
    return this.menuService.menus;
  }
}
