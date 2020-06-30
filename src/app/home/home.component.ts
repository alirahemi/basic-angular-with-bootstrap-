import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  age: number = 35;
  name: string = "Ali";
  btnClick = "Button is not clicked!";
  lastName = "";

  allowClick = false;
  buttonClicked = false;
  tests = ['test1', 'test2'];

  constructor(){
    setTimeout(()=>{
      this.allowClick = true;
    }, 5000);
  }

  ngOnInit(){

  }

  onButtonClicked(){
    this.buttonClicked = true;
    this.btnClick = "Button is now clicked!";
    this.tests.push('test');
  }

  onInputChange(event: Event){
    this.lastName = (<HTMLInputElement>event.target).value;
  }

  getName(){
    return this.name;
  }

}
