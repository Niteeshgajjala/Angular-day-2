import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dir',
  imports: [CommonModule],
  templateUrl: './dir.component.html',
  styleUrls: ['./dir.component.css']
})
export class DirComponent {
  isVisible: boolean = true;
  items: string[] = ['Angular', 'React', 'Vue', 'Svelte'];
  isHighlighted: boolean = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }
}
