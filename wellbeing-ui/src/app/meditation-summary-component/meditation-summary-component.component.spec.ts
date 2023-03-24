import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditationSummaryComponentComponent } from './meditation-summary-component.component';

describe('MeditationSummaryComponentComponent', () => {
  let component: MeditationSummaryComponentComponent;
  let fixture: ComponentFixture<MeditationSummaryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeditationSummaryComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeditationSummaryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
