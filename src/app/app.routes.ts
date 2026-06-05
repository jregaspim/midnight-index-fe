import { Routes } from '@angular/router';
import { KeyboardListPage } from './features/keyboard/pages/keyboard-list-page/keyboard-list-page';
import { KeyboardDetailPage } from './features/keyboard/pages/keyboard-detail-page/keyboard-detail-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'keyboards',
    pathMatch: 'full',
  },
  {
    path: 'keyboards',
    component: KeyboardListPage,
  },
  {
    path: 'keyboards/:id',
    component: KeyboardDetailPage,
  },
];
