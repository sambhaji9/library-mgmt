import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StudentFormService } from './student-form.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentFormComponent } from './student-form.component';

describe('StudentFormService', () => {
	beforeEach(() => TestBed.configureTestingModule({
		imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
		declarations: [StudentFormComponent]
	}));

	it('should be created', () => {
		const service: StudentFormService = TestBed.get(StudentFormService);
		expect(service).toBeTruthy();
	});
});
