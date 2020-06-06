import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksFormComponent } from './books-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BooksFormComponent', () => {
	let component: BooksFormComponent;
	let fixture: ComponentFixture<BooksFormComponent>;

	beforeEach(async(() => {
		const routes: Routes = [];
		TestBed.configureTestingModule({
			imports: [ReactiveFormsModule, FormsModule, RouterTestingModule.withRoutes(routes),HttpClientTestingModule],
			declarations: [BooksFormComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BooksFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
