import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css',
  standalone: true,
})
export class InterpolacionComponent {
  title = 'InterpolacionComponent';
  userName = signal("");

  onClick(){
    console.log("hola");
  }

  captureInput(name: any){
    const target = name.target as HTMLTextAreaElement | null;
  if (target) {
    this.userName.set(target.value);
  }

  }

}
