import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-disable-button',
  imports: [FormsModule],
  templateUrl: './disable-button.component.html',
  styleUrl: './disable-button.component.css'
})
export class DisableButtonComponent {
  inputText : string = "";
}
