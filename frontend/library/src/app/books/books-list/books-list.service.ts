import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { IBooksList } from './books-list.model';

@Injectable({
	providedIn: 'root'
})
export class BooksListService {

	constructor(private httpClient: HttpClient) { }

	getSubjectAreas(): Observable<IBooksList[]> {
		return this.httpClient.get<IBooksList[]>(environment.url.concat(environment.subjectAreas));
	}
}
