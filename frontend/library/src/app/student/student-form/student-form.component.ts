import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentFormService } from './student-form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
	selector: 'app-student-form',
	templateUrl: './student-form.component.html',
	styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

	studentForm = new FormGroup({
		studentName: new FormControl(''),
		studentRollNo: new FormControl(''),
		studentClass: new FormControl('')
	});
	saveMessage: string = "";
	showSaveButton: boolean = true;

	classArray: string[] = ["MCA-I", "MCA-II", "MCA-III", "BCA-I", "BCA-II", "BCA-III", "B.Sc-I", "B.Sc-II", "B.Sc-III", "BA-I", "BA-II", "BA-III"]

	constructor(private studentFormService: StudentFormService, private activatedRoute: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		let params = this.activatedRoute.snapshot.params;
		if (params.hasOwnProperty('name')) {
			this.studentForm.setValue({
				studentName: this.activatedRoute.snapshot.params.name,
				studentRollNo: this.activatedRoute.snapshot.params.rollNo,
				studentClass: this.activatedRoute.snapshot.params.class
			});
			this.showSaveButton = false;
		}
	}

	/**
	 * Function saving the student details in the students collection and
	 * showing the message returned from the server
	 */
	saveStudentDetails() {
		this.studentFormService.saveStudentDetails(this.studentForm.value).subscribe(response => {
			this.saveMessage = response.message;
		});
	}

	updateStudentDetails() {
		this.studentFormService.updateStudentDetails({
			name: this.studentForm.value.studentName,
			rollNo: this.studentForm.value.studentRollNo,
			class: this.studentForm.value.studentClass,
			_id: this.activatedRoute.snapshot.params._id
		}).subscribe(response => {
			if (response.code === 'R00') {
				this.router.navigate(['/student-list/']);
			}
		});
	}
}
