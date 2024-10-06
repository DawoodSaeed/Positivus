import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { OurWorkingProcessComponent } from './our-working-process/our-working-process.component';
import { TeamsComponent } from './teams/teams.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialsComponent } from "./testimonials/testimonials.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    OurServicesComponent,
    CallToActionComponent,
    CaseStudyComponent,
    OurWorkingProcessComponent,
    TeamsComponent,
    ContactUsComponent,
    FooterComponent,
    TestimonialsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  teamsLoaded = false;
  loaded() {
    this.teamsLoaded = true;
  }
  title = 'my-project';
}
