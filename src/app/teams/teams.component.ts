import { Component } from '@angular/core';
import { HeadingComponent } from "../heading/heading.component";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [HeadingComponent, ButtonComponent],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {

}
