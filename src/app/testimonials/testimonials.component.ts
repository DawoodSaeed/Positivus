import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { HeadingComponent } from '../heading/heading.component';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, HeadingComponent],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent {
  testimonials = [
    {
      text: '“We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.”',
      author: 'John Smith',
      title: 'Marketing Director at XYZ Corp',
    },
    {
      text: '"Positivus has been instrumental in transforming our digital marketing strategy. Their innovative approach and data-driven insights have helped us reach new audiences and increase our conversion rates. The team\'s dedication and expertise are truly impressive."',
      author: 'Sarah Johnson',
      title: 'CEO of TechInnovate Solutions',
    },
    {
      text: '"We were struggling to stand out in a crowded market until we partnered with Positivus. Their creative campaigns and SEO strategies have significantly boosted our online visibility. The results speak for themselves - our web traffic has doubled, and our sales have increased by 30%."',
      author: 'Michael Chen',
      title: 'Founder of GreenEco Products',
    },
    {
      text: '"The team at Positivus goes above and beyond. They not only delivered a stunning website redesign but also provided valuable insights into our overall digital strategy. Their holistic approach to digital marketing has helped us achieve consistent growth quarter after quarter."',
      author: 'Emily Rodriguez',
      title: 'CMO at HealthFirst Clinics',
    },
    {
      text: '"As a small business owner, I was hesitant to invest in digital marketing. Positivus understood our budget constraints and tailored a strategy that maximized our ROI. Their personalized approach and attention to detail have made all the difference in our online success."',
      author: 'David Thompson',
      title: 'Owner of Artisan Crafts Co.',
    },
  ];

  currentIndex = 0;
  cardWidth = 600;

  prevTestimonial(element: HTMLElement) {
    if (this.currentIndex <= 0) {
      this.currentIndex = this.testimonials.length - 1;
      element.scrollLeft = (this.testimonials.length - 1) * this.cardWidth;
    } else {
      this.currentIndex--;
      element.scrollLeft -= this.cardWidth;
    }
    this.updateActiveClass();
  }

  nextTestimonial(element: HTMLElement) {
    if (this.currentIndex >= this.testimonials.length - 1) {
      this.currentIndex = 0;
      element.scrollLeft = 0;
    } else {
      this.currentIndex++;
      element.scrollLeft += this.cardWidth;
    }
    this.updateActiveClass();
  }

  updateActiveClass() {
    const testimonials = document.querySelectorAll(
      '.testimonial > .testimonial-text'
    );
    testimonials.forEach((testimonial, index) => {
      if (index === this.currentIndex) {
        testimonial.classList.add('active');
      } else {
        testimonial.classList.remove('active');
      }
    });
  }
}
