import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { RouterOutlet } from '@angular/router';
import { PageContainer } from './shared/components/page-container/page-container';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, PageContainer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('midnight-index');
}
