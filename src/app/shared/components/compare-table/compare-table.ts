import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compare-table',
  imports: [],
  templateUrl: './compare-table.html',
  styleUrl: './compare-table.css',
})
export class CompareTable {
  @Input() headers: string[] = [];
  @Input() rows: any[][] = [];
}
