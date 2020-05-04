import { TestBed } from '@angular/core/testing';

import { SubjectAreasService } from './subject-areas.service';

describe('SubjectAreasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubjectAreasService = TestBed.get(SubjectAreasService);
    expect(service).toBeTruthy();
  });
});
