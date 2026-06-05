import { Component, signal } from '@angular/core';
import { Keyboard } from '../../models/keyboard.interface';
import { KeyboardService } from '../../services/keyboard-service';
import { ActivatedRoute } from '@angular/router';
import { PageContainer } from '../../../../shared/components/page-container/page-container';

@Component({
  selector: 'app-keyboard-detail-page',
  imports: [PageContainer],
  templateUrl: './keyboard-detail-page.html',
  styleUrl: './keyboard-detail-page.css',
})
export class KeyboardDetailPage {
  keyboard = signal<Keyboard | undefined>(undefined);
  isLoading = signal(true);
  errorMessage = signal<string | undefined>(undefined);

  constructor(
    private route: ActivatedRoute,
    private keyboardService: KeyboardService,
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.keyboardService.getKeyboardById(id).subscribe({
      next: (data) => {
        this.keyboard.set(data);
        this.isLoading.set(false);
      },
      error: (error: any) => {
        this.errorMessage.set(error.error?.message || 'Failed to load keyboard details.');
        this.isLoading.set(false);
      },
    });
  }
}
