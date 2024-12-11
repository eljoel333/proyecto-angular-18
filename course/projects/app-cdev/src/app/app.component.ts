import { Component, effect, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './modules/auth/views/components/login/login.component';
import { PageLoginComponent } from './modules/auth/views/pages/page-login/page-login.component';
import {MatSidenavModule} from '@angular/material/sidenav'
import { HeaderComponent } from './modules/core/views/components/header/header.component';
import { MenuComponent } from './modules/core/views/components/menu/menu.component';
import { LayoutService } from '../../../app-cdev-lib/src/public-api';


const modules = [
 RouterOutlet, MatSidenavModule
]

const components = [
   PageLoginComponent, HeaderComponent, MenuComponent
]

@Component({
  selector: 'cdev-root',
  imports: [...modules, ...components],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appCDev';
  showMenu = true;
  showHeader = true;


  constructor(private readonly layoutService: LayoutService){
effect(()=>{
this.showMenu = this.layoutService.showMenu();
this.showHeader = this.layoutService.showHeader();
})
  
    
  }
}
