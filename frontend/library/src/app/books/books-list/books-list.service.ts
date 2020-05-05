import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class BooksListService {

	constructor(private httpClient: HttpClient) { }
	
	getBooksList(databaseName: string): Observable<any> {

		let params = new HttpParams();
		params = params.append('name', databaseName);

		return this.httpClient.get(environment.url.concat(environment.subject), {params: params});
	}
}
