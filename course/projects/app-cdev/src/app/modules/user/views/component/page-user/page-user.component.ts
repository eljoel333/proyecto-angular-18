import { Component } from '@angular/core';
import { LayoutService } from '../../../../../../../../app-cdev-lib/src/public-api';


@Component({
  selector: 'cdev-page-user',
  imports: [],
  templateUrl: './page-user.component.html',
  styleUrl: './page-user.component.css'
})
export class PageUserComponent {
  constructor(private readonly layoutService: LayoutService) {
    this.layoutService.changeConfigLayout({
      showHeader:true,
      showMenu:true,
    })
   }

}
