import { Component, inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { Router } from '@angular/router';

const modules = [
  MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatDividerModule
]

@Component({
  selector: 'cdev-header',
  imports: [...modules],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private router = inject(Router);

  logout(){
    this.router.navigate(['/login']);
  }

}
