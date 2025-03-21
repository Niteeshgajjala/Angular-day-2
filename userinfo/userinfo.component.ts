import { Component } from '@angular/core';
export class User {
  constructor(public name: string, public age: number) {}
}

@Component({
  selector: 'app-userinfo',
  imports: [],
  templateUrl: './userinfo.component.html',
  styleUrl: './userinfo.component.css'
})
export class UserinfoComponent {
  user = { name: 'Niteesh Kumar Reddy', age: 22 };
}
