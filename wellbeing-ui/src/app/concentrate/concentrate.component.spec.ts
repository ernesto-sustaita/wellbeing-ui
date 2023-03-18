import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcentrateComponent } from './concentrate.component';

describe('ConcentrateComponent', () => {
  let component: ConcentrateComponent;
  let fixture: ComponentFixture<ConcentrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcentrateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcentrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
