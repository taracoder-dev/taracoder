import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-spinner',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="spinner-overlay" *ngIf="isLoading">
      <div class="spinner">
        <div class="spinner-ring"></div>
        <p class="spinner-text">{{ loadingText }}</p>
      </div>
    </div>
  `,
    styleUrl: './spinner.component.css'
})
export class SpinnerComponent {
    @Input() isLoading: boolean = false;
    @Input() loadingText: string = 'Loading...';
}
