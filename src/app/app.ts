import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { KeyboardCard } from './components/card/keyboard/keyboard-card';
import { Keyboard } from './models/keyboard.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, KeyboardCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('midnight-index');

  keyboards: Keyboard[] = [
    {
      brand: 'Wooting',
      model: '60HE',
      layout: '60%',
      switchType: 'Hall Effect',
      price: 175,
      wireless: false,
    },

    {
      brand: 'Keychron',
      model: 'Q1 Max',
      layout: '75%',
      switchType: 'Mechanical',
      price: 220,
      wireless: true,
    },

    {
      brand: 'DrunkDeer',
      model: 'A75',
      layout: '75%',
      switchType: 'Magnetic',
      price: 150,
      wireless: false,
    },
  ];
}
