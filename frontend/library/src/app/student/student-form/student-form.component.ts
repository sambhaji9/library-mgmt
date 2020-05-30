import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentFormService } from './student-form.service';

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

	classArray: string[] = ["MCA-I","MCA-II","MCA-III","BCA-I","BCA-II","BCA-III", "B.Sc-I", "B.Sc-II", "B.Sc-III","BA-I", "BA-II", "BA-III"]

	constructor(private studentFormService: StudentFormService) { }

	ngOnInit() {
	}

	saveStudentDetails() {
		this.studentFormService.saveStudentDetails(this.studentForm.value).subscribe(response => {
			this.saveMessage = response.message;
		});
	}

}
