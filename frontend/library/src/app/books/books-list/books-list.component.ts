import { Component, OnInit } from '@angular/core';
import { BooksListService } from './books-list.service';
import { ISubjectArea } from './books-list.model';

@Component({
	selector: 'app-books-list',
	templateUrl: './books-list.component.html',
	styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

	constructor(private booksListService: BooksListService) { }

	ngOnInit() {
	}
}
