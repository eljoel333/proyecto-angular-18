import { Component, inject } from '@angular/core';
import { ContainerComponent, LayoutService, TitleComponent } from '../../../../../../../../app-cdev-lib/src/public-api';
import { BaseComponent } from '../../../../core/views/components/base.component';


@Component({
  selector: 'cdev-page-user',
  imports: [TitleComponent, ContainerComponent],
  templateUrl: './page-user.component.html',
  styleUrl: './page-user.component.css'
})
export class PageUserComponent extends BaseComponent {

  title = 'User';
    icon = 'people';
  
  
  }
  