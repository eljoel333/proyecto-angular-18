import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

type MenuItem = {
  route: string;
  icon: string;
  title: string;
}

@Component({
  selector: 'cdev-menu',
  imports: [MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  menuItems: MenuItem[] = [
    {route: '', icon:'', title:'Dashboard'},
    {route: '', icon:'', title:'Users'},
    {route: '', icon:'', title:'Settings'},
    
  ];

}
