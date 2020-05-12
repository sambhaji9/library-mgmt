import { Component, OnInit } from '@angular/core';
import { BooksListService } from './books-list.service';
import { ActivatedRoute } from '@angular/router';
import { ISubject, IBook } from './books-list.model';

@Component({
	selector: 'app-books-list',
	templateUrl: './books-list.component.html',
	styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

	subject: ISubject = {
		_id: '',
		name: '',
		databaseName: ''
	};
	booksList: IBook[] = [];
	databaseName: string;
	selectedBooksList: IBook[] = [];

	constructor(private booksListService: BooksListService,
		private activateRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activateRoute.paramMap.subscribe((paramObj) => {
			this.subject._id = paramObj.get('_id');
			this.subject.name = paramObj.get('name');
			this.subject.databaseName = paramObj.get('databaseName');

			this.getBooksList(this.subject.databaseName);
		});
	}

	getBooksList(databaseName: string) {
		this.booksListService.getBooksList(databaseName).subscribe(results => {
			this.booksList = results;
		});
	}

	isDisabled(book: IBook): boolean {
		return !book.availability
	}

	onChange(book: IBook, isChecked: boolean) {
		if (!isChecked && this.selectedBooksList.includes(book)) {
			let indexOfBook = this.selectedBooksList.indexOf(book);
			this.selectedBooksList.splice(indexOfBook, 1);
		} else {
			this.selectedBooksList.push(book);
		}
	}

	assignBooksToStudent() {
		console.log(JSON.stringify(this.selectedBooksList, null, 3));
	}
}
