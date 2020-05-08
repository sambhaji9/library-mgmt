import { TestBed } from '@angular/core/testing';

import { SubjectAreasService } from './subject-areas.service';
import { HttpClientModule } from '@angular/common/http';

describe('SubjectAreasService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: SubjectAreasService = TestBed.get(SubjectAreasService);
    expect(service).toBeTruthy();
  });
});
