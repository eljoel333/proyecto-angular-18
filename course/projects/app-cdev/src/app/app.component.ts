import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './modules/auth/views/components/login/login.component';
import { PageLoginComponent } from './modules/auth/views/pages/page-login/page-login.component';
import {MatSidenavModule} from '@angular/material/sidenav'
import { HeaderComponent } from './modules/core/views/components/header/header.component';

@Component({
  selector: 'cdev-root',
  imports: [RouterOutlet, PageLoginComponent, MatSidenavModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appCDev';
}
