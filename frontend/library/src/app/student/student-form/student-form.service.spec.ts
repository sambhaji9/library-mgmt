import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StudentFormService } from './student-form.service';

describe('StudentFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: StudentFormService = TestBed.get(StudentFormService);
    expect(service).toBeTruthy();
  });
});
