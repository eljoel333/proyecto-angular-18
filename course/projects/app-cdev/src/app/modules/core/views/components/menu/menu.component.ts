import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

type MenuItem = {
  route: string;
  icon: string;
  title: string;
}

@Component({
  selector: 'cdev-menu',
  imports: [MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  menuItems: MenuItem[] = [
    {route: '/dashboard', icon:'dashboard', title:'Dashboard'},
    {route: '/users', icon:'people', title:'Users'},
    {route: '/course', icon:'settings', title:'Courses'},
    {route: '/schedule', icon: 'schedule', title: 'Schedule'}
    
  ];

}
