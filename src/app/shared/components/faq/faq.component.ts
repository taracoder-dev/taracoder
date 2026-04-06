import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FAQ {
    id: number;
    question: string;
    answer: string;
}

@Component({
    selector: 'app-faq',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="faq-container">
      <div class="faq-item" *ngFor="let item of faqs" appScrollAnimation>
        <div class="faq-question" (click)="toggleFaq(item.id)" [ngClass]="{ active: activeId === item.id }">
          <span>{{ item.question }}</span>
          <span class="toggle-icon">{{ activeId === item.id ? '−' : '+' }}</span>
        </div>
        <div class="faq-answer" *ngIf="activeId === item.id" [@slideDown]>
          <p>{{ item.answer }}</p>
        </div>
      </div>
    </div>
  `,
    styleUrl: './faq.component.css'
})
export class FAQComponent {
    @Input() faqs: FAQ[] = [];
    activeId: number | null = null;

    toggleFaq(id: number) {
        this.activeId = this.activeId === id ? null : id;
    }
}
