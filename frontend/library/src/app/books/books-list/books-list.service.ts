import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IBook } from './books-list.model';

@Injectable({
	providedIn: 'root'
})
export class BooksListService {

	constructor(private httpClient: HttpClient) { }
	
	/**
	 * Function returning the list of the books for a subject area
	 * @param databaseName, name of the collection
	 * @returns Observable, of IBook array
	 */
	getBooksList(databaseName: string): Observable<IBook[]> {
		let params = new HttpParams();
		params = params.append('name', databaseName);

		return this.httpClient.get<IBook[]>(environment.url.concat(environment.subject), {params: params});
	}
}
