import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  @Input() placeholder = 'Search...';

  @Input() searchText = '';

  @Output() searchTextChange = new EventEmitter<string>();

  onInputChange() {
    this.searchTextChange.emit(this.searchText);
  }
}
