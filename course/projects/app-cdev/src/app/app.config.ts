import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LayoutModule, LAYOUT_CONFIG } from '../../../app-cdev-lib/src/public-api';

import { provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(),
    importProvidersFrom(LayoutModule.forRoot(LAYOUT_CONFIG)),
    provideLottieOptions({
      player: () => player,
    }),
  ]
};
