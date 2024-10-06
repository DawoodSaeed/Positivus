import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  email: string = '';

  subscribeToNews() {
    // Implement subscription logic here
    console.log('Subscribing with email:', this.email);
    this.email = ''; // Clear the input after subscribing
  }
}
