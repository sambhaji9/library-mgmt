import { Component, OnInit } from '@angular/core';
import { SubjectAreasService } from './subject-areas.service';
import { ISubjectArea } from '../books-list/books-list.model';

@Component({
	selector: 'app-subject-areas',
	templateUrl: './subject-areas.component.html',
	styleUrls: ['./subject-areas.component.css']
})
export class SubjectAreasComponent implements OnInit {

	subjectAreaList: ISubjectArea[] = [];

	constructor(private subjectAreasService: SubjectAreasService) { }

	ngOnInit() {
		this.subjectAreasService.getSubjectAreas().subscribe((results) => {
			this.subjectAreaList = results;
		});
	}

	loadBooksList(subjectArea: ISubjectArea) {
		console.log(subjectArea.databaseName);
	}

}
