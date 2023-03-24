import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditationSummaryComponent } from './meditation-summary.component';

describe('MeditationSummaryComponentComponent', () => {
  let component: MeditationSummaryComponent;
  let fixture: ComponentFixture<MeditationSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeditationSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeditationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
