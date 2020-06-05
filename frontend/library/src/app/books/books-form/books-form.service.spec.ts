import { TestBed } from '@angular/core/testing';

import { BooksFormService } from './books-form.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksFormComponent } from './books-form.component';


describe('BooksFormService', () => {
	beforeEach(() => TestBed.configureTestingModule({
		imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
		declarations: [BooksFormComponent]
	}));

	it('should be created', () => {
		const service: BooksFormService = TestBed.get(BooksFormService);
		expect(service).toBeTruthy();
	});
});
