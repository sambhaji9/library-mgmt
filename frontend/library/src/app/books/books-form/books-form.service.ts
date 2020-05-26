import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IResponse } from './books-model';

@Injectable({
	providedIn: 'root'
})
export class BooksFormService {

	constructor(private http: HttpClient) { }

	saveNewBook(newSubjectArea: string): Observable<IResponse> {
		let params = new HttpParams();
		params = params.append('newSubjectArea', newSubjectArea)

		return this.http.post<IResponse>(environment.url.concat(environment.newSubjectArea), { params: params });
	}
}
