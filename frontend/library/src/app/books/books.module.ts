import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { SubjectAreasComponent } from './subject-areas/subject-areas.component';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './books-list/search-filter.pipe';

@NgModule({
	declarations: [BooksListComponent, SubjectAreasComponent, SearchFilterPipe],
	imports: [
		CommonModule, FormsModule
	],
	exports: [BooksListComponent, SubjectAreasComponent]
})
export class BooksModule { }
