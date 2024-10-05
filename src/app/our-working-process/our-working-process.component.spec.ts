import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWorkingProcessComponent } from './our-working-process.component';

describe('OurWorkingProcessComponent', () => {
  let component: OurWorkingProcessComponent;
  let fixture: ComponentFixture<OurWorkingProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurWorkingProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurWorkingProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
