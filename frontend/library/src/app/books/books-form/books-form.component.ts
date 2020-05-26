import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksFormService } from './books-form.service';

@Component({
	selector: 'app-books-form',
	templateUrl: './books-form.component.html',
	styleUrls: ['./books-form.component.css']
})
export class BooksFormComponent implements OnInit {

	subjectAreaName = new FormControl('');

	constructor(private activatedRoute: ActivatedRoute, private booksFormService: BooksFormService, private router: Router) { }

	ngOnInit() {
		console.log(this.activatedRoute.snapshot.paramMap.get('id'));
	}

	saveSubjectAreaName() {
		if (this.subjectAreaName.value !== "") {
			this.booksFormService.saveNewBook(this.subjectAreaName.value).subscribe(message => {
				if (message.code === "R00") {
					this.router.navigate(['/subject-areas/']);
				}
			});
		}
	}

}
