import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../counter/counter.component';

@Component({
    selector: 'app-stats',
    standalone: true,
    imports: [CommonModule, CounterComponent],
    template: `
    <div class="stats-container">
      <div class="stat-item" *ngFor="let stat of stats" appScrollAnimation>
        <app-counter 
          [endValue]="stat.value"
          [label]="stat.label"
          [suffix]="stat.suffix">
        </app-counter>
      </div>
    </div>
  `,
    styleUrl: './stats.component.css'
})
export class StatsComponent {
    @Input() stats: Array<{ value: number; label: string; suffix: string }> = [];
}
