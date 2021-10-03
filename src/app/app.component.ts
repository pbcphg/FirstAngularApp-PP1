import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `
  <div class="container">
  <app-header></app-header>
  <!-- <p>hello world</p>
  <button> press here</button>
  <p>{{ subtitle }}</p>
  <p>{{ firstNumber}} </p>
  <hr/> -->

  <p>{{counter}}</p>
  <button (click)= "counter = counter +2" >Press here</button>
  </div>
`,
styles: ['button { background-color: salmon }',
'button:hover { background-color: blue ; color: white}' ]
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
