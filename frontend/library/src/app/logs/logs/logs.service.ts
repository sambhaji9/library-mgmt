import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILogs } from './logs.model';

@Injectable({
   providedIn: 'root'
})
export class LogsService {

   constructor(private httpClient: HttpClient) { }

   getLogs(): Observable<ILogs[]> {
      return this.httpClient.get<ILogs[]>(environment.url.concat(environment.logs));
   }
}
