import { Component } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
import { LayoutService } from '../../../../../../../../app-cdev-lib/src/public-api';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'cdev-page-login',
  imports: [LoginComponent, LottieComponent],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.css',
  standalone:true
})
export class PageLoginComponent {

  options: AnimationOptions = {
    path: '/assets/lotties/portada.json',
  };


  constructor(private readonly layoutService: LayoutService){
    this.layoutService.changeConfigLayout({
      showHeader:false, showMenu:false
    });

  }

}
