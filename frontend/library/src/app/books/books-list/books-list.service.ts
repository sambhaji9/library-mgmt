import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ISubjectArea } from './books-list.model';

@Injectable({
	providedIn: 'root'
})
export class BooksListService {

	constructor(private httpClient: HttpClient) { }

	getSubjectAreas(): Observable<ISubjectArea[]> {
		return this.httpClient.get<ISubjectArea[]>(environment.url.concat(environment.subjectAreas));
	}
}
