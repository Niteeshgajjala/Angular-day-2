import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {
  title = 'Welcome to Angular!';
  username = 'Niteesh Kumar Reddy';
  currentDate = new Date();

  getGreeting() {
    return `Hello, ${this.username}! Have a great day!`;
    }

    constructor() {
      setTimeout(() => {
        this.username = 'Shannu';
      }, 5000);
    }
    

}
