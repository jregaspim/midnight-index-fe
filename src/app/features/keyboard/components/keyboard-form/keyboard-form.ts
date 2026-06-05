import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KeyboardCreateRequest, KeyboardFeatures } from '../../models/keyboard.interface';
import { UiInput } from '../../../../shared/components/ui-input/ui-input';
import { UiButton } from '../../../../shared/components/ui-button/ui-button';

@Component({
  selector: 'app-keyboard-form',
  imports: [FormsModule, UiInput, UiButton],
  templateUrl: './keyboard-form.html',
  styleUrl: './keyboard-form.css',
})
export class KeyboardForm {
  @Output() formSubmit = new EventEmitter<KeyboardCreateRequest>();

  formData: KeyboardCreateRequest = {
    brand: '',
    model: '',
    price: 0,
    imageUrl: '',
    specs: {
      layout: '',
      switchType: '',
    },
    features: {
      wireless: false,
      rgb: false,
      hotSwap: false,
    } as KeyboardFeatures,
  };

  onSubmit() {
    this.formSubmit.emit(this.formData);
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      brand: '',
      model: '',
      price: 0,
      imageUrl: '',
      specs: {
        layout: '',
        switchType: '',
      },
      features: {
        wireless: false,
        rgb: false,
        hotSwap: false,
      } as KeyboardFeatures,
    };
  }
}
