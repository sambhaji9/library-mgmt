import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IResponse } from './books-model';
import { IBook } from '../books-list/books-list.model';

@Injectable({
	providedIn: 'root'
})
export class BooksFormService {

	constructor(private http: HttpClient) { }

	saveNewSubjectArea(newSubjectArea: string): Observable<IResponse> {
		let params = new HttpParams();
		params = params.append('newSubjectArea', newSubjectArea)

		return this.http.post<IResponse>(environment.url.concat(environment.newSubjectArea), { params: params });
	}

	saveNewBook(subjectDetails: IBook) {
		let params = new HttpParams();
		params = params.append('newBook', JSON.stringify(subjectDetails));

		return this.http.post<IResponse>(environment.url.concat(environment.newBook), { params: params });
	}
}
