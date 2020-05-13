import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISubjectArea } from './subject-area.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SubjectAreasService {

  constructor(private httpClient: HttpClient) { }

  /**
	 * Function returning the list of the subject areas
	 * @returns Observable, of ISubjectArea array
	 */
  getSubjectAreas(): Observable<ISubjectArea[]> {
		return this.httpClient.get<ISubjectArea[]>(environment.url.concat(environment.subjectAreas));
	}
}
