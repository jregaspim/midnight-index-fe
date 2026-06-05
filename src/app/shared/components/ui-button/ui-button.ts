import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  imports: [],
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.css',
})
export class UiButton {
  label = input.required<string>();

  buttonType = input<'primary' | 'secondary'>('primary');

  clicked = output<void>();

  onClick() {
    this.clicked.emit();
  }
}
