import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-ui-input',
  imports: [],
  templateUrl: './ui-input.html',
  styleUrl: './ui-input.css',
})
export class UiInput {
  label = input.required<string>();
  placeholder = input('');
  value = input('');
  type = input('text');

  valueChange = output<string>();

  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.valueChange.emit(inputElement.value);
  }
}
