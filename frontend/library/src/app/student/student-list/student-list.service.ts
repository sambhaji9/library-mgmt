import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudentForm } from '../student-form/student-form.model';
import { environment } from 'src/environments/environment';
import { IResponse } from 'src/app/books/books-form/books-model';

@Injectable({
	providedIn: 'root'
})
export class StudentListService {

	constructor(private httpClient: HttpClient) { }

	/**
	 * Function returning the list of students
	 */
	getStudentList(): Observable<IStudentForm[]> {
		return this.httpClient.get<IStudentForm[]>(environment.url.concat(environment.student));
	}

	/**
	 * Function deleting the studentDetails from the collection
	 * @param student 
	 */
	deleteStudentDetails(student: IStudentForm): Observable<IResponse> {
		let params = new HttpParams();
		params = params.append('id', student._id);

		return this.httpClient.delete<IResponse>(environment.url.concat(environment.deleteStudent), {params: params});
	}
}
