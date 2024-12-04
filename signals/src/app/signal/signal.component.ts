import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {

  a = signal(10);
  b = signal(20);
  result = computed(()=> this.a()+ this.b())

  userList = signal(['joel', 'luz', 'Renata'])
messageUserTotal = 'Total user 0';
nameMostLarge ='';
nameMostShort ='';

 


  constructor(){

    effect(()=>{
     const total = this.userList.length;
     this.messageUserTotal = `Total user: ${total}`;
     this.calculateNameMostLarg();
     this.calculateNameMostShort();


    })



    setTimeout(() => {
      this.b.set(30)

      // const list = this.userList();
      // list.push('Dana');
      // this.userList.set(list);

      this.userList.update((prvList: string[])=>[...prvList, 'Carlos', 'mauricios']);
    }, 3000);
  }

  calculateNameMostLarg(){
    this.nameMostLarge = this.userList().reduce((prev, currect )=> prev.length > currect.length ? prev: currect);
  }

 calculateNameMostShort(){
  this.nameMostShort = this.userList().reduce((prev, currect )=> prev.length  < currect.length ? prev:currect);
 }

}
