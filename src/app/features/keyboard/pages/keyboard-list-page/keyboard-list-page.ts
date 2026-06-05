import { Component, signal } from '@angular/core';
import { CompareService } from '../../../../shared/compare-service';
import { Keyboard, KeyboardCreateRequest } from '../../models/keyboard.interface';
import { KeyboardService } from '../../services/keyboard-service';
import { KeyboardCard } from '../../components/keyboard-card/keyboard-card';
import { FormsModule } from '@angular/forms';
import { CompareTable } from '../../../../shared/components/compare-table/compare-table';
import { SearchBar } from '../../../../shared/components/search-bar/search-bar';
import { PageContainer } from '../../../../shared/components/page-container/page-container';

@Component({
  selector: 'app-keyboard-list-page',
  imports: [KeyboardCard, FormsModule, CompareTable, SearchBar, PageContainer],
  templateUrl: './keyboard-list-page.html',
  styleUrl: './keyboard-list-page.css',
})
export class KeyboardListPage {
  searchText = '';
  selectedKeyboardIds: number[] = [];
  keyboards = signal<Keyboard[]>([]);
  isLoading = signal(true);
  errorMessage = signal<string | undefined>(undefined);

  constructor(
    private keyboardService: KeyboardService,
    private compareService: CompareService,
  ) {
    this.keyboardService.getKeyboards().subscribe({
      next: (keyboards) => {
        this.keyboards.set(keyboards);
        this.isLoading.set(false);
      },
      error: (error) => {
        this.errorMessage.set('Failed to load keyboards.');
        this.isLoading.set(false);
        console.log('isLoading:', this.isLoading);
        console.log('errorMessage:', this.errorMessage);
      },
    });
  }

  onKeyboardCompare(keyboardId: number) {
    this.compareService.toggleProduct(keyboardId);
    this.selectedKeyboardIds = this.compareService.getSelectedProductIds();
  }

  getCompareTableHeaders(): string[] {
    return ['Brand', 'Model', 'Layout', 'Switch Type', 'Price', 'Wireless'];
  }

  getCompareTableRows(): (string | number)[][] {
    return this.getSelectedKeyboards().map((keyboard) => [
      keyboard.brand,
      keyboard.model,
      keyboard.price,
      keyboard.specs.layout,
      keyboard.specs.switchType,
      keyboard.features.wireless ? 'Yes' : 'No',
      keyboard.features.rgb ? 'Yes' : 'No',
      keyboard.features.hotSwap ? 'Yes' : 'No',
    ]);
  }

  getSelectedKeyboards(): Keyboard[] {
    return this.keyboards().filter((keyboard) => this.selectedKeyboardIds.includes(keyboard.id));
  }

  getFilteredKeyboards(): Keyboard[] {
    const normalizedSearch = this.searchText.toLowerCase();

    return this.keyboards().filter((keyboard) => {
      return (
        keyboard.brand.toLowerCase().includes(normalizedSearch) ||
        keyboard.model.toLowerCase().includes(normalizedSearch)
      );
    });
  }

  onSearchChange(value: string) {
    this.searchText = value;
  }

  onCreateKeyboard(request: KeyboardCreateRequest) {
    this.keyboardService.createKeyboard(request).subscribe({
      next: (newKeyboard) => {
        this.keyboards.update((keyboards) => [...keyboards, newKeyboard]);
      },
      error: (error) => {
        console.error('Failed to create keyboard:', error);
      },
    });
  }
}
