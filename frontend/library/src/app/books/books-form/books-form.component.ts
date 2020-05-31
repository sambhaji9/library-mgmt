import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksFormService } from './books-form.service';
import { ISubject } from '../books-list/books-list.model';

@Component({
	selector: 'app-books-form',
	templateUrl: './books-form.component.html',
	styleUrls: ['./books-form.component.css']
})
export class BooksFormComponent implements OnInit {

	displaySubjectAreaForm = true;

	// Initializing the new subjectArea form
	subjectAreaName = new FormControl('');

	// Initializing the new books form
	booksForm = new FormGroup({
		name: new FormControl(''),
		language: new FormControl(''),
		description: new FormControl('')
	});

	// Initializing the subjectArea object
	subjectArea: ISubject = {
		_id: "",
		name: "",
		databaseName: ""
	};

	params: any;
	responseMessage: string;

	constructor(private activatedRoute: ActivatedRoute, private booksFormService: BooksFormService, private router: Router) { }

	ngOnInit() {
		this.params = this.activatedRoute.snapshot.paramMap;
		if (this.activatedRoute.snapshot.paramMap.get('id') !== 'subject-area') {
			this.displaySubjectAreaForm = false;
			this.subjectArea.name = this.params.get('name');
			this.subjectArea.databaseName = this.params.get('databaseName');
		}

	}

	/**
	 * function saving the new subject area in subjectArea collection
	 * After successful saving navigating back to subject-areas page
	 */
	saveSubjectAreaName() {
		if (this.subjectAreaName.value !== "") {
			this.booksFormService.saveNewSubjectArea(this.subjectAreaName.value).subscribe(message => {
				if (message.code === "R00") {
					this.router.navigate(['/subject-areas/']);
				}
			});
		}
	}

	/**
	 * function saving the new book details in the respective books collection
	 * After successful saving displaying the result message
	 */
	saveNewBookDetails() {
		this.booksFormService.saveNewBook({
			_id: "",
			name: this.booksForm.value.name,
			language: this.booksForm.value.language,
			description: this.booksForm.value.description,
			availability: true,
			studentId: "",
			databaseName: this.subjectArea.databaseName
		}).subscribe(response => {
			if (response.code === "R00") {
				this.responseMessage = response.message;
				this.booksForm.reset();
			}
		});
	}

}
