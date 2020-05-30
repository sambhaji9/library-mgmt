import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudentForm } from '../student-form/student-form.model';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class StudentListService {

	constructor(private httpClient: HttpClient) { }

	getStudentList(): Observable<IStudentForm[]> {
		return this.httpClient.get<IStudentForm[]>(environment.url.concat(environment.student));
	}
}
