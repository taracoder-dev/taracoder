import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-team-card',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="team-card" appScrollAnimation>
      <div class="team-image">
        <img [src]="image" [alt]="name" class="team-photo">
      </div>
      <div class="team-info">
        <h4 class="team-name">{{ name }}</h4>
        <p class="team-role">{{ role }}</p>
        <p class="team-bio">{{ bio }}</p>
        <div class="team-social">
          <a [href]="social.linkedin" target="_blank" title="LinkedIn" class="social-icon">
            in
          </a>
          <a [href]="social.twitter" target="_blank" title="Twitter" class="social-icon">
            𝕏
          </a>
        </div>
      </div>
    </div>
  `,
    styleUrl: './team-card.component.css'
})
export class TeamCardComponent {
    @Input() name: string = '';
    @Input() role: string = '';
    @Input() bio: string = '';
    @Input() image: string = '';
    @Input() social: { linkedin: string; twitter: string } = { linkedin: '', twitter: '' };
}
