import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-books-form',
	templateUrl: './books-form.component.html',
	styleUrls: ['./books-form.component.css']
})
export class BooksFormComponent implements OnInit {

	subjectAreaName = new FormControl('');

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		console.log(this.activatedRoute.snapshot.paramMap.get('id'));
	}

	saveSubjectAreaName() {
		console.log(this.subjectAreaName.value);
	}

}
