import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pancakeImage: string = 'url(./not-burned.png)'; 
  isFlipping: boolean = false; // Flag to trigger the flip animation

  flipPancake() {
    this.isFlipping = true;

    setTimeout(() => {
      // After the flip animation ends, randomly choose between heads or tails
      this.pancakeImage = Math.random() < 0.5 ? 'url(./not-burned.png)' : 'url(./burned.png)';
      this.isFlipping = false; // End flip animation
    }, 650); // Duration of the flip animation (1 second)
  }
}
