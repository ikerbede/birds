import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, input } from '@angular/core';
import { Bird } from '../models/bird';
import { map, Observable, of } from 'rxjs';
import { BirdDetailsResponse } from '../models/bird-details-response';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-bird-details',
  imports: [AsyncPipe],
  templateUrl: './bird-details.html',
  styleUrl: './bird-details.scss',
})
export class BirdDetails {
  private readonly http = inject(HttpClient);
  
  bird = input.required<Bird>();

  bird$: Observable<Bird | undefined> = of(undefined);

  constructor() {
    effect(() => this.bird$ = this.getBirdDetails(this.bird()))
  }

  private getBirdDetails(bird: Bird): Observable<Bird> {
    return this.http
      .get<BirdDetailsResponse>(
        `https://oiseauxdefrance.org/taxhub/api/bibnoms/taxoninfo/${bird.id}`,
      )
      .pipe(
        map((response) => ({
          ...bird,
          description: response.attributs.find((attr) => attr.nom_attribut === 'description')?.valeur_attribut,
          photoUrl: response.medias.find(media => media.nom_type_media === 'Photo')?.url
        })),
      );
  }
}
