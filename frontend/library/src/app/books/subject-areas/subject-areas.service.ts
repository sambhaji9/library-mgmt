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

  getSubjectAreas(): Observable<ISubjectArea[]> {
		return this.httpClient.get<ISubjectArea[]>(environment.url.concat(environment.subjectAreas));
	}
}
