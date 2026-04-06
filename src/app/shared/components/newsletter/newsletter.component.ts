import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-newsletter',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
    <div class="newsletter-box" appScrollAnimation>
      <h3 class="newsletter-title">{{ title }}</h3>
      <p class="newsletter-subtitle">{{ subtitle }}</p>
      <form (ngSubmit)="onSubscribe()" #newsletterForm="ngForm" class="newsletter-form">
        <div class="form-group">
          <input 
            type="email" 
            placeholder="Enter your email"
            [(ngModel)]="email"
            name="email"
            required
            class="newsletter-input">
          <button type="submit" class="newsletter-btn" [disabled]="!email">
            {{ isSubscribed ? '✓ Subscribed' : 'Subscribe' }}
          </button>
        </div>
        <p *ngIf="isSubscribed" class="success-message">Thank you for subscribing!</p>
      </form>
    </div>
  `,
    styleUrl: './newsletter.component.css'
})
export class NewsletterComponent {
    @Input() title: string = 'Subscribe to Our Newsletter';
    @Input() subtitle: string = 'Get the latest updates on our services and products';

    email: string = '';
    isSubscribed: boolean = false;

    onSubscribe() {
        if (this.email) {
            this.isSubscribed = true;
            this.email = '';
            setTimeout(() => {
                this.isSubscribed = false;
            }, 3000);
        }
    }
}
