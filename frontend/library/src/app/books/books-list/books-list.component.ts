import { Component, OnInit } from '@angular/core';
import { BooksListService } from './books-list.service';
import { ActivatedRoute } from '@angular/router';
import { ISubject } from './books-list.model';

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
	booksList = [];
	databaseName: string;

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
}
