import { Component, OnInit } from '@angular/core';
import { HeadingComponent } from '../heading/heading.component';
import { ButtonComponent } from '../button/button.component';
import { AsyncPipe } from '@angular/common';
import { NgIf } from '@angular/common';
import { Observable, forkJoin, of } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [HeadingComponent, ButtonComponent, NgIf, AsyncPipe],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css',
})
export class TeamsComponent implements OnInit {
  imagesLoaded$: Observable<boolean> = of(false);

  ngOnInit() {
    const imagePaths = [
      '../../assets/images/team-members/michael_brown.svg',
      '../../assets/images/team-members/emily_johnson.svg',
      '../../assets/images/team-members/john_smith.svg',
      '../../assets/images/team-members/jane_doe.svg',
      '../../assets/images/team-members/briane_willaims.svg',
      '../../assets/images/team-members/sarah_kim.svg',
      '../../assets/images/companies/linkedin.svg',
    ];

    this.imagesLoaded$ = forkJoin(
      imagePaths.map((path) => this.preloadImage(path))
    ).pipe(map(() => true));
  }

  private preloadImage(src: string): Observable<Event> {
    return new Observable((observer) => {
      const img = new Image();
      img.onload = (event) => {
        observer.next(event);
        observer.complete();
      };
      img.onerror = (err) => {
        observer.error(err);
      };
      img.src = src;
    });
  }
}
