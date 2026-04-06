import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="card-wrapper" [ngClass]="cardClass">
      <div class="card-content" appScrollAnimation>
        <div class="card-icon" *ngIf="icon">{{ icon }}</div>
        <h3 class="card-title">{{ title }}</h3>
        <p class="card-description">{{ description }}</p>
        <ul class="card-features" *ngIf="features && features.length > 0">
          <li *ngFor="let feature of features">{{ feature }}</li>
        </ul>
      </div>
    </div>
  `,
    styleUrl: './card.component.css'
})
export class CardComponent {
    @Input() title: string = '';
    @Input() description: string = '';
    @Input() icon: string = '';
    @Input() features: string[] = [];
    @Input() cardClass: string = 'service-card';
}
