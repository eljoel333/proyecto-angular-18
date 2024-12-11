import { Component } from '@angular/core';
import { LayoutService } from '../../../../../../../../app-cdev-lib/src/public-api';

@Component({
  selector: 'cdev-page-dashboard',
  imports: [],
  templateUrl: './page-dashboard.component.html',
  styleUrl: './page-dashboard.component.css',
  standalone:true,
})
export class PageDashboardComponent {

  constructor(private readonly layoutService: LayoutService){
    this.layoutService.changeConfigLayout({
      showMenu:true,
      showHeader:true
    })
  }

}
