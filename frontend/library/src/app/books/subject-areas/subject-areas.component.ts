import { Component, OnInit } from '@angular/core';
import { SubjectAreasService } from './subject-areas.service';
import { ISubjectArea } from './subject-area.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-subject-areas',
	templateUrl: './subject-areas.component.html',
	styleUrls: ['./subject-areas.component.css']
})
export class SubjectAreasComponent implements OnInit {

	/** array for the subject areas available in the library */
	subjectAreaList: ISubjectArea[] = [];

	constructor(private readonly subjectAreasService: SubjectAreasService,
		private readonly router: Router) { }

	ngOnInit() {
		this.subjectAreasService.getSubjectAreas().subscribe((results) => {
			this.subjectAreaList = results;
		});
	}

	/**
	 * Function navigating to the books-list page
	 * @param subjectArea, selected subject area
	 */
	goToBooksList(subjectArea: ISubjectArea) {
		this.router.navigate(['/subject/', subjectArea]);
	}

}
