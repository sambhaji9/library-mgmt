import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-student-list',
	templateUrl: './student-list.component.html',
	styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit() {
	}

	navigateToStudentForm() {
		this.router.navigate(['/student-form/']);
	}

}
