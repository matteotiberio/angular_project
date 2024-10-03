import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesQuestionComponent } from './series-question.component';

describe('SeriesQuestionComponent', () => {
  let component: SeriesQuestionComponent;
  let fixture: ComponentFixture<SeriesQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeriesQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
