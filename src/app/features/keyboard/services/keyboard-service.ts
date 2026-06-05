import { Injectable } from '@angular/core';
import { Keyboard, KeyboardCreateRequest } from '../models/keyboard.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class KeyboardService {
  constructor(private http: HttpClient) {}

  private apiUrl = '/api/v1/keyboards';

  getKeyboards() {
    return this.http.get<Keyboard[]>(this.apiUrl);
  }

  getKeyboardById(id: number) {
    return this.http.get<Keyboard>(`${this.apiUrl}/${id}`);
  }

  createKeyboard(request: KeyboardCreateRequest) {
    return this.http.post<Keyboard>(this.apiUrl, request);
  }
}
