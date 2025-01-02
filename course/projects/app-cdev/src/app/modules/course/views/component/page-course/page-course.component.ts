import { Component, inject } from '@angular/core';
import { ContainerComponent, LayoutService, TitleComponent } from '../../../../../../../../app-cdev-lib/src/public-api';
import { BaseComponent } from '../../../../core/views/components/base.component';


@Component({
  selector: 'cdev-page-course',
  imports: [TitleComponent, ContainerComponent],
  templateUrl: './page-course.component.html',
  styleUrl: './page-course.component.css'
})
export class PageCourseComponent extends BaseComponent{
  
title = 'Courseee con commit';
icon= 'settings'


}
