import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-keyboard-card',
  imports: [],
  templateUrl: './keyboard-card.html',
  styleUrl: './keyboard-card.css',
})
export class KeyboardCard {
  @Input() brand = '';
  @Input() model = '';
  @Input() layout = '';
  @Input() switchType = '';
  @Input() price = 0;
}
