import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { SubjectAreasComponent } from './subject-areas/subject-areas.component';
import { UtilityPipesModule } from '../utility-pipes/utility-pipes.module';
import { BooksFormComponent } from './books-form/books-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [BooksListComponent, SubjectAreasComponent, BooksFormComponent],
	imports: [
		CommonModule, FormsModule, UtilityPipesModule, ReactiveFormsModule, RouterModule
	],
	exports: [BooksListComponent, SubjectAreasComponent, BooksFormComponent]
})
export class BooksModule { }
