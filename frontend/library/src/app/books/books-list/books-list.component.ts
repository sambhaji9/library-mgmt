import { Component, OnInit } from '@angular/core';
import { BooksListService } from './books-list.service';
import { ActivatedRoute, Router } from '@angular/router';
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

	/** books list array returned from the BooksListService */
	booksList: IBook[] = [];
	/** name of the collection */
	databaseName: string;
	/** selected books array */
	selectedBooksList = [];

	constructor(private booksListService: BooksListService,
		private activateRoute: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		// get the routes parameters on navigating to books-list page
		this.activateRoute.paramMap.subscribe((paramObj) => {
			this.subject._id = paramObj.get('_id');
			this.subject.name = paramObj.get('name');
			this.subject.databaseName = paramObj.get('databaseName');

			this.getBooksList(this.subject.databaseName);
		});
	}

	/**
	 * Function getting the books list from the BooksListService
	 * @param databaseName, name of the collection in the database
	 */
	getBooksList(databaseName: string) {
		this.booksListService.getBooksList(databaseName).subscribe(results => {
			this.booksList = results;
		});
	}

	/**
	 * Function returning the true or false, depending on the availability of the book
	 * @param book 
	 */
	isDisabled(book: IBook): boolean {
		return !book.availability
	}

	/**
	 * Function updating the selectedBooksList array, when the checkbox is ticked or unticked
	 * @param book, book object 
	 * @param isChecked, boolean
	 */
	onChange(book, isChecked: boolean) {
		if (!isChecked && this.selectedBooksList.includes(book)) {
			let indexOfBook = this.selectedBooksList.indexOf(book);
			this.selectedBooksList.splice(indexOfBook, 1);
		} else {
			this.selectedBooksList.push(JSON.stringify(book));
		}
	}

	/**
	 * Function updating the book in the collection, when book is assigned to a student
	 */
	assignBooksToStudent() {
		this.router.navigate(['/student-details/', this.selectedBooksList]);
	}

	/**
	 * Function navigating to the new books
	 */
	navigateToBooksForm() {
		this.router.navigate(['/new/', this.subject]);
	}
}
