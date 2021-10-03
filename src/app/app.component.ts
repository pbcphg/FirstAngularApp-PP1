import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngularApp';
  subtitle = 'Application';
  firstNumber = 3;
  secondNumber = 6;
  counter = 0;

  click(){
    this.counter = this.counter + 1;
  }
}
