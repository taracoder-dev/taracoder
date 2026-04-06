import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-section',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="section" [ngClass]="sectionClass">
      <div class="container">
        <div *ngIf="title" class="section-header" appScrollAnimation>
          <h2 class="section-title">{{ title }}</h2>
          <p *ngIf="subtitle" class="section-subtitle">{{ subtitle }}</p>
        </div>
        <div class="section-content" appScrollAnimation>
          <ng-content></ng-content>
        </div>
      </div>
    </section>
  `,
    styleUrl: './section.component.css'
})
export class SectionComponent {
    @Input() title: string = '';
    @Input() subtitle: string = '';
    @Input() sectionClass: string = '';
}
