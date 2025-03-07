import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyComponent } from './survey-component.component';

describe('SurveyComponentComponent', () => {
  let component: SurveyComponent;
  let fixture: ComponentFixture<SurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SurveyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
