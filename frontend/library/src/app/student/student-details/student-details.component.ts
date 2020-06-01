import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { element } from '@angular/core/src/render3';
import { IBook } from 'src/app/books/books-list/books-list.model';

@Component({
	selector: 'app-student-details',
	templateUrl: './student-details.component.html',
	styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
	books: IBook[] = [];
	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		let paramKeys = Object.keys(this.activatedRoute.snapshot.params);
		paramKeys.forEach(element => {
			this.books.push(JSON.parse(this.activatedRoute.snapshot.params[element]));
		});
	}

}
