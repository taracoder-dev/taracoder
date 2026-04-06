import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-testimonial-card',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="testimonial-card" appScrollAnimation>
      <div class="testimonial-stars">
        <span *ngFor="let star of [1,2,3,4,5]" [ngClass]="{ filled: star <= rating }">★</span>
      </div>
      <p class="testimonial-message">{{ message }}</p>
      <div class="testimonial-author">
        <img [src]="image" [alt]="name" class="author-image">
        <div class="author-info">
          <h5 class="author-name">{{ name }}</h5>
          <p class="author-company">{{ company }}</p>
        </div>
      </div>
    </div>
  `,
    styleUrl: './testimonial-card.component.css'
})
export class TestimonialCardComponent {
    @Input() name: string = '';
    @Input() company: string = '';
    @Input() message: string = '';
    @Input() rating: number = 5;
    @Input() image: string = '';
}
