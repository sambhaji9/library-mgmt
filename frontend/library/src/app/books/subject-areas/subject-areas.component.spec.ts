import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAreasComponent } from './subject-areas.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { UtilityPipesModule } from 'src/app/utility-pipes/utility-pipes.module';
import { FormsModule } from '@angular/forms';

describe('SubjectAreasComponent', () => {
  let component: SubjectAreasComponent;
  let fixture: ComponentFixture<SubjectAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectAreasComponent ],
      imports: [HttpClientModule, RouterTestingModule, UtilityPipesModule, FormsModule]
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
