import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IStudentForm } from './student-form.model';

@Injectable({
	providedIn: 'root'
})
export class StudentFormService {

	constructor(private httpClient: HttpClient) { }

	saveStudentDetails(studentDetails: IStudentForm): Observable<IStudentForm> {
		let params = new HttpParams();
		params = params.append('studentDetails', JSON.stringify(studentDetails));

		return this.httpClient.post<IStudentForm>(environment.url.concat(environment.newStudent), {params: params});
	}
}
