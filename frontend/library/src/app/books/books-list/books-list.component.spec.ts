import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksListComponent } from './books-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { UtilityPipesModule } from 'src/app/utility-pipes/utility-pipes.module';
import { FormsModule } from '@angular/forms';

describe('BooksListComponent', () => {
	let component: BooksListComponent;
	let fixture: ComponentFixture<BooksListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BooksListComponent],
			imports: [HttpClientModule, RouterTestingModule, UtilityPipesModule, FormsModule]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BooksListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
