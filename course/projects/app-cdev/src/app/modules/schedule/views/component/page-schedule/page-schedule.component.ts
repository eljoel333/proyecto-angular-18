import { Component, inject } from '@angular/core';
import { ContainerComponent, LayoutService, TitleComponent } from '../../../../../../../../app-cdev-lib/src/public-api';
import { BaseComponent } from '../../../../core/views/components/base.component';


@Component({
  selector: 'cdev-page-user',
  imports: [TitleComponent, ContainerComponent],
  templateUrl: './page-schedule.component.html',
  styleUrl: './page-schedule.component.css'
})
export class PageScheduleComponent extends BaseComponent {

  title = 'schedule';
    icon = 'schedule';
  
  
  }
  