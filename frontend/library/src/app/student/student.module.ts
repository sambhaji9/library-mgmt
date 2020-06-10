import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilityPipesModule } from '../utility-pipes/utility-pipes.module';

@NgModule({
	declarations: [
		StudentListComponent, 
		StudentDetailsComponent, 
		StudentFormComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		UtilityPipesModule
	]
})
export class StudentModule { }
