import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-counter',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="counter-box" appScrollAnimation>
      <div class="counter-value">{{ displayValue }}{{ suffix }}</div>
      <div class="counter-label">{{ label }}</div>
    </div>
  `,
    styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit, OnDestroy {
    @Input() endValue: number = 0;
    @Input() label: string = '';
    @Input() suffix: string = '';
    @Input() duration: number = 2000;

    displayValue: number = 0;
    private countInterval: any;

    ngOnInit() {
        this.animateCounter();
    }

    ngOnDestroy() {
        if (this.countInterval) {
            clearInterval(this.countInterval);
        }
    }

    private animateCounter() {
        const increment = this.endValue / (this.duration / 50);
        let currentValue = 0;

        this.countInterval = setInterval(() => {
            currentValue += increment;
            if (currentValue >= this.endValue) {
                this.displayValue = this.endValue;
                clearInterval(this.countInterval);
            } else {
                this.displayValue = Math.floor(currentValue);
            }
        }, 50);
    }
}
