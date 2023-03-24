import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarDistractionComponent } from './snack-bar-distraction.component';

describe('SnackBarDistractionComponent', () => {
  let component: SnackBarDistractionComponent;
  let fixture: ComponentFixture<SnackBarDistractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackBarDistractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackBarDistractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
