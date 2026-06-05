import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompareService {
  private selectedProductIds: number[] = [];

  getSelectedProductIds(): number[] {
    return this.selectedProductIds;
  }

  toggleProduct(id: number) {
    const isSelected = this.selectedProductIds.includes(id);

    if (isSelected) {
      this.selectedProductIds = this.selectedProductIds.filter((productId) => productId !== id);
    } else {
      this.selectedProductIds.push(id);
    }
  }
}
