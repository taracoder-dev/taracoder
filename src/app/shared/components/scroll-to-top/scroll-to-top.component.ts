import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-scroll-to-top',
    standalone: true,
    imports: [CommonModule],
    template: `
    <button 
      class="scroll-to-top" 
      *ngIf="isVisible"
      (click)="scrollToTop()"
      title="Scroll to top"
      [@fadeInOut]>
      ↑
    </button>
  `,
    styleUrl: './scroll-to-top.component.css'
})
export class ScrollToTopComponent implements OnInit {
    isVisible: boolean = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.isVisible = window.scrollY > 300;
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    ngOnInit() {
        this.onWindowScroll();
    }
}
