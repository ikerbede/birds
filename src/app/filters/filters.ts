import { Component, output } from '@angular/core';

@Component({
  selector: 'app-filters',
  imports: [],
  templateUrl: './filters.html',
  styleUrl: './filters.scss',
})
export class Filters {
  filter = output<string>();

  onInputChange(input: string) {
    this.filter.emit(input);
  }
}
