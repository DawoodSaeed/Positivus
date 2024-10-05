import { Component } from '@angular/core';
import { HeadingComponent } from '../heading/heading.component';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [HeadingComponent],
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.css',
})
export class CaseStudyComponent {}
