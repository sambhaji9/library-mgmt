import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAreasComponent } from './subject-areas.component';

describe('SubjectAreasComponent', () => {
  let component: SubjectAreasComponent;
  let fixture: ComponentFixture<SubjectAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
