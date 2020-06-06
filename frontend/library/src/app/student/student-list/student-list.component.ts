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
	message: string = 'This is a alert message';
	showAlertMessage = false;

	ngOnInit() {
		this.getStudentsList();
	}

	/**
	 * Function navigating to the student form
	 */
	navigateToStudentForm(student: IStudentForm) {
		this.router.navigate(['/student-form/']);
	}

	/**
	 * Function returning the list of students
	 */
	getStudentsList() {
		this.studentListService.getStudentList().subscribe(response => {
			this.studentList = response;
		});
	}

	/**
	 * Function allowing the editing of the studentDetails
	 * @param student
	 */
	editStudentDetails(student: IStudentForm) {
		this.router.navigate(['/student-form/', student]);
	}

	/**
	 * Function allowing the deleting of the studentDetails
	 * @param student
	 */
	deleteStudentDetails(student: IStudentForm) {
		this.studentListService.deleteStudentDetails(student).subscribe(response => {
			if (response.code === 'R00') {
				this.showAlertMessage = true;
				this.message = response.message;

				// reload the student-list
				this.getStudentsList();
			}
		});
	}

	/**
	 * Function navigating to studentDetails form
	 * @param student, studentDetails
	 */
	navigateToStudentDetails(student: IStudentForm) {
		this.router.navigate(['/student-details/', { url: 'student-list', 'studentDetails': JSON.stringify(student) }]);
	}

}
