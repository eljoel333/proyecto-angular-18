import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';

type MenuItem = {
  route: string;
  icon: string;
  title: string;
}

@Component({
  selector: 'cdev-menu',
  imports: [MatIconModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  menuItems: MenuItem[] = [
    {route: '/', icon:'dashboard', title:'Dashboard'},
    {route: '/users', icon:'people', title:'Users'},
    {route: '/settings', icon:'settings', title:'Settings'},
    
  ];

}
