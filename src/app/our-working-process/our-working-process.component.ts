import { Component } from '@angular/core';
import { HeadingComponent } from '../heading/heading.component';

@Component({
  selector: 'app-our-working-process',
  standalone: true,
  imports: [HeadingComponent],
  templateUrl: './our-working-process.component.html',
  styleUrl: './our-working-process.component.css',
})
export class OurWorkingProcessComponent {
  previousOpenDetails: HTMLDetailsElement | null = null;

  toggle(event: Event) {
    console.log(event);

    // Check if the clicked details is not the same as the previously open one
    const clickedDetails = (event.target as HTMLElement).closest('details');
    if (
      clickedDetails instanceof HTMLDetailsElement &&
      clickedDetails !== this.previousOpenDetails
    ) {
      if (this.previousOpenDetails) {
        this.previousOpenDetails.open = false;
      }
      const clickedDetails = (event.target as HTMLElement).closest('details');
      if (clickedDetails instanceof HTMLDetailsElement) {
        this.previousOpenDetails = clickedDetails;
      }
    }
  }

  toggleDetails(event: Event) {
    // Prevent the default behavior of the click event
    event.preventDefault();

    // Get the parent element (process-item) of the clicked button
    const processItem = (event.target as HTMLElement).closest('.process-item');

    if (processItem) {
      // Find the details element within the process-item
      const details = processItem.querySelector('details');

      if (details) {
        // Toggle the open attribute of the details element
        details.open = !details.open;
      }
    }
  }
}
