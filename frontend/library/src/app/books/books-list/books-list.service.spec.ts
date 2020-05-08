import { TestBed } from '@angular/core/testing';

import { BooksListService } from './books-list.service';
import { HttpClientModule } from '@angular/common/http';

describe('BooksListService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: BooksListService = TestBed.get(BooksListService);
    expect(service).toBeTruthy();
  });
});
