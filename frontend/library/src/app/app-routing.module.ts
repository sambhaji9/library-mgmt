import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectAreasComponent } from './books/subject-areas/subject-areas.component';

const routes: Routes = [
	{
		path: 'subject-areas',
		component: SubjectAreasComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
