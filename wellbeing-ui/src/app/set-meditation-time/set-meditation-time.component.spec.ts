import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetMeditationTimeComponent } from './set-meditation-time.component';

describe('SetMeditationTimeComponent', () => {
  let component: SetMeditationTimeComponent;
  let fixture: ComponentFixture<SetMeditationTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetMeditationTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetMeditationTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
