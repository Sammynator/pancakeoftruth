import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flip-animation',
  standalone: false,
  templateUrl: './flip-animation.component.html',
  styleUrl: './flip-animation.component.css'
})
export class FlipAnimationComponent {
  @Input() isFlipping: boolean = false;
  @Input() pancakeImage: string = '';
}
