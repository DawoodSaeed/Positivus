import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { OurServicesComponent } from "./our-services/our-services.component";
import { CallToActionComponent } from "./call-to-action/call-to-action.component";
import { CaseStudyComponent } from "./case-study/case-study.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, OurServicesComponent, CallToActionComponent, CaseStudyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
}
