import { Component, effect, input, signal } from '@angular/core';
import { Bird } from '../models/bird';
import { BirdDetails } from "../bird-details/bird-details";

@Component({
  selector: 'app-birds',
  imports: [BirdDetails],
  templateUrl: './birds.html',
  styleUrl: './birds.scss',
})
export class Birds {
  birds = input<Bird[]>([]);

  selectedBird = signal<Bird | undefined>(undefined);

  constructor() {
    effect(() => this.selectedBird.set(this.birds()[0]))
  }

  showDetails(bird: Bird) {
    this.selectedBird.set(bird);
  }
}
