import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { SubjectAreasComponent } from './subject-areas/subject-areas.component';
import { FormsModule } from '@angular/forms';
import { UtilityPipesModule } from '../utility-pipes/utility-pipes.module';
import { BooksFormComponent } from './books-form/books-form.component';

@NgModule({
	declarations: [BooksListComponent, SubjectAreasComponent, BooksFormComponent],
	imports: [
		CommonModule, FormsModule, UtilityPipesModule
	],
	exports: [BooksListComponent, SubjectAreasComponent]
})
export class BooksModule { }
