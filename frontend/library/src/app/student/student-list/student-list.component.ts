import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IStudentForm } from '../student-form/student-form.model';
import { StudentListService } from './student-list.service';

@Component({
	selector: 'app-student-list',
	templateUrl: './student-list.component.html',
	styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

	constructor(private router: Router, private studentListService: StudentListService) { }

	studentList: IStudentForm[];

	ngOnInit() {
		this.getBooksList();
	}

	navigateToStudentForm() {
		this.router.navigate(['/student-form/']);
	}

	getBooksList() {
		this.studentListService.getStudentList().subscribe(response => {
			this.studentList = response;
		});
	}

}
