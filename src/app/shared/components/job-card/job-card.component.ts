import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-job-card',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="job-card" appScrollAnimation>
      <div class="job-header">
        <h4 class="job-title">{{ title }}</h4>
        <span class="job-department">{{ department }}</span>
      </div>
      <p class="job-experience">📅 {{ experience }}</p>
      <p class="job-description">{{ description }}</p>
      <div class="requirements">
        <h5>Requirements:</h5>
        <ul>
          <li *ngFor="let req of requirements">{{ req }}</li>
        </ul>
      </div>
      <button class="apply-btn" (click)="onApply()">
        {{ isApplied ? '✓ Applied' : 'Apply Now' }}
      </button>
    </div>
  `,
    styleUrl: './job-card.component.css'
})
export class JobCardComponent {
    @Input() title: string = '';
    @Input() department: string = '';
    @Input() experience: string = '';
    @Input() description: string = '';
    @Input() requirements: string[] = [];

    isApplied: boolean = false;

    onApply() {
        this.isApplied = true;
        setTimeout(() => {
            this.isApplied = false;
        }, 3000);
    }
}
