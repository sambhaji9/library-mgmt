import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectAreasComponent } from './books/subject-areas/subject-areas.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { StudentListComponent } from './student/student-list/student-list.component';

const routes: Routes = [
	{
		path: 'subject-areas',
		component: SubjectAreasComponent
	},
	{
		path: 'subject',
		component: BooksListComponent
	},
	{
		path: 'student-list',
		component: StudentListComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
