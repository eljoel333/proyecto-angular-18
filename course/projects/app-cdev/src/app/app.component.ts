import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './modules/auth/views/components/login/login.component';
import { PageLoginComponent } from './modules/auth/views/pages/page-login/page-login.component';
import {MatSidenavModule} from '@angular/material/sidenav'
import { HeaderComponent } from './modules/core/views/components/header/header.component';
import { MenuComponent } from './modules/core/views/components/menu/menu.component';


const modules = [
  MatSidenavModule
]

const components = [
  RouterOutlet, PageLoginComponent, HeaderComponent, MenuComponent
]

@Component({
  selector: 'cdev-root',
  imports: [...modules, ...components],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appCDev';

  showMenu = false;
  showHeader = true;
}
