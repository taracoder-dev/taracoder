import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-btn',
    standalone: true,
    imports: [CommonModule],
    template: `
    <button 
      class="btn" 
      [ngClass]="'btn-' + variant"
      [disabled]="disabled"
      (click)="onClick()">
      <span class="btn-content">{{ text }}</span>
    </button>
  `,
    styleUrl: './btn.component.css'
})
export class ButtonComponent {
    @Input() text: string = 'Button';
    @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
    @Input() disabled: boolean = false;

    onClick() {
        if (!this.disabled) {
            // Button click logic
        }
    }
}
