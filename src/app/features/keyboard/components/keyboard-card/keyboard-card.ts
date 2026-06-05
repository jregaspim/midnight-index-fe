import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UiButton } from '../../../../shared/components/ui-button/ui-button';
import { UiCard } from '../../../../shared/components/ui-card/ui-card';

@Component({
  selector: 'app-keyboard-card',
  imports: [RouterLink, UiButton, UiCard],
  templateUrl: './keyboard-card.html',
  styleUrl: './keyboard-card.css',
})
export class KeyboardCard {
  @Input() brand = '';
  @Input() model = '';
  @Input() layout = '';
  @Input() switchType = '';
  @Input() price = 0;
  @Input() id = 0;
  @Input() selected = false;
  @Input() imageUrl = '';

  @Output() compare = new EventEmitter<number>();

  onCompareClick() {
    this.compare.emit(this.id);
  }
}
