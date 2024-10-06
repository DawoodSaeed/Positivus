import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="testimonial-slider">
      <div class="testimonial-container" [@slideAnimation]="currentIndex">
        <div
          *ngFor="let testimonial of testimonials; let i = index"
          class="testimonial"
          [class.active]="i === currentIndex"
        >
          <div class="quote-container">
            <p class="quote">{{ testimonial.quote }}</p>
          </div>
          <div class="author-info">
            <p class="author">{{ testimonial.author }}</p>
            <p class="position">{{ testimonial.position }}</p>
          </div>
        </div>
      </div>
      <div class="navigation">
        <button class="nav-button prev" (click)="prevSlide()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <div class="dots">
          <span
            *ngFor="let dot of testimonials; let i = index"
            class="dot"
            [class.active]="i === currentIndex"
            (click)="goToSlide(i)"
          ></span>
        </div>
        <button class="nav-button next" (click)="nextSlide()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .testimonial-slider {
        background-color: #1c1c1c;
        color: white;
        padding: 2rem;
        border-radius: 1rem;
        font-family: Arial, sans-serif;
        max-width: 800px;
        margin: 0 auto;
      }

      .testimonial-container {
        position: relative;
        height: 200px;
        overflow: hidden;
      }

      .testimonial {
        position: absolute;
        width: 100%;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
      }

      .testimonial.active {
        opacity: 1;
      }

      .quote-container {
        background-color: #2a2a2a;
        border: 1px solid #7cfc00;
        border-radius: 1rem;
        padding: 1rem;
        margin-bottom: 1rem;
      }

      .quote {
        font-size: 1rem;
        line-height: 1.5;
      }

      .author-info {
        text-align: center;
      }

      .author {
        font-weight: bold;
        color: #7cfc00;
        margin-bottom: 0.25rem;
      }

      .position {
        font-size: 0.9rem;
        color: #cccccc;
      }

      .navigation {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
      }

      .nav-button {
        background: none;
        border: none;
        color: #7cfc00;
        cursor: pointer;
        font-size: 1.5rem;
        padding: 0.5rem;
      }

      .nav-button svg {
        width: 24px;
        height: 24px;
      }

      .dots {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 1rem;
      }

      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #444;
        margin: 0 0.25rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      .dot.active {
        background-color: #7cfc00;
      }
    `,
  ],
  animations: [
    trigger('slideAnimation', [
      transition('* => *', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms ease-in-out', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
  ],
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [
    {
      quote:
        'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
      author: 'John Smith',
      position: 'Marketing Director at XYZ Corp',
    },
    {
      quote:
        'Positivus has transformed our digital marketing strategy. Their innovative approach and dedication to results have significantly boosted our online visibility and customer engagement.',
      author: 'Sarah Johnson',
      position: 'CEO at ABC Industries',
    },
    {
      quote:
        "The expertise and creativity of the Positivus team have been instrumental in our company's growth. They've helped us navigate the complex digital landscape with ease.",
      author: 'Michael Brown',
      position: 'Operations Manager at 123 Solutions',
    },
  ];

  currentIndex = 0;

  ngOnInit() {
    this.startAutoSlide();
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  private startAutoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }
}
