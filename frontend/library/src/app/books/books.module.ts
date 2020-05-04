import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { SubjectAreasComponent } from './subject-areas/subject-areas.component';

@NgModule({
	declarations: [BooksListComponent, SubjectAreasComponent],
	imports: [
		CommonModule
	],
	exports: [BooksListComponent, SubjectAreasComponent]
})
export class BooksModule { }
