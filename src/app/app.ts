import { Component, inject, OnInit, signal } from '@angular/core';
import { Birds } from "./birds/birds";
import { HttpClient } from '@angular/common/http';
import { Bird } from './models/bird';
import { Filters } from "./filters/filters";

@Component({
  selector: 'app-root',
  imports: [Birds, Filters],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private readonly http = inject(HttpClient);

  private allBirds: Bird[] = [];
  readonly birds = signal(this.allBirds);

  ngOnInit(): void {
    this.http.get<Bird[]>('birds.data.json').subscribe((birds) => {
      this.allBirds = birds;
      this.birds.set(birds);
    });
  }

  filterBirds(input: string) {
    this.birds.set(this.allBirds.filter((bird) => bird.name.toLowerCase().includes(input.toLowerCase())));
  }
}
