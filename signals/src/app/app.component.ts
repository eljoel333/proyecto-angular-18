import { Interpolation } from '@angular/compiler';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { SignalComponent } from './signal/signal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InterpolacionComponent, SignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
