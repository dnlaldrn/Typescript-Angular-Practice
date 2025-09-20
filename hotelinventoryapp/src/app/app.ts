import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rooms } from "./rooms/rooms";

@Component({
  selector: 'hinv-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Rooms],
})
export class App {
  protected readonly title = signal('hotelinventoryapp');
}
