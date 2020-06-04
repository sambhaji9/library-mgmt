import { TestBed } from '@angular/core/testing';

import { BooksFormService } from './books-form.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('BooksFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: BooksFormService = TestBed.get(BooksFormService);
    expect(service).toBeTruthy();
  });
});
