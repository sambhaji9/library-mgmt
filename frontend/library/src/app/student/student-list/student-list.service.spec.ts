import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StudentListService } from './student-list.service';

describe('StudentListService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: StudentListService = TestBed.get(StudentListService);
    expect(service).toBeTruthy();
  });
});
