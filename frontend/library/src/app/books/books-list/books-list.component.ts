import { Component, OnInit } from '@angular/core';
import { BooksListService } from './books-list.service';
import { IBooksList } from './books-list.model';

@Component({
	selector: 'app-books-list',
	templateUrl: './books-list.component.html',
	styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

	booksList: IBooksList[] = [];

	constructor(private booksListService: BooksListService) { }

	ngOnInit() {
		this.booksListService.getSubjectAreas().subscribe((results) => {
			this.booksList = results;
		});
	}

	eventCall(book) {
		console.log(book.name);
	}
}
