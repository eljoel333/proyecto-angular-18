import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { Validations } from '../../../../../../../../app-cdev-lib/src/public-api';

@Component({
  selector: 'cdev-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private email:string = "";
  private password:string = "";

  //@ViewChild('emailV') emailInputV!: ElementRef;
  //@ViewChild('passwordV') passwordInputV!: ElementRef;

  emailInputV = viewChild<ElementRef>('emailV')
  passwordInputV = viewChild<ElementRef>('passwordV')
  constructor(){

  }

  validateInputs():boolean{
    if (this.email=="" || this.password==""){
      return false;
    }

    if(!Validations.validateEmail(this.email))
    {
      alert('invalid mail');
      return false;
    }

    if(!Validations.validatePassword(this.password))
    {
      console.log(this.password)
      alert('invalid password');
      return false;
    }

    return true;
  }

  login():void{
    console.log("en login")

    if(!this.validateInputs()) return;
    

    if(this.validateCredentials()){
      this.resetInputs();
      alert("todo ok");
    
    }


  }

  captureInput(event: any, tipo: number){
    if(tipo==1){
        this.email = event.target.value;

    }
    else{
      this.password = event.target.value;   
    }
  }

  validateCredentials():boolean{
    return this.email == "joel@mail.com" && this.password == "Joel12345" ;

  }

  resetInputs(){
    const email = this.emailInputV()!;
    email.nativeElement.value ="";
    const pass = this.passwordInputV()!;
    pass.nativeElement.value ="";
  }


}
