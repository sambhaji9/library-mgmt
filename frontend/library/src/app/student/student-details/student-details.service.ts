import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IResponse } from 'src/app/books/books-form/books-model';

@Injectable({
   providedIn: 'root'
})
export class StudentDetailsService {

   constructor(private httpClient: HttpClient) { }

   /**
    * Function updating the studentDetails, when books are assigned to the student
    * @param student 
    * @param books 
    */
   assignBooks(student, books): Observable<IResponse> {
      let httpParams = new HttpParams();
      httpParams = httpParams.append("data", JSON.stringify({
         'id': student._id,
         'books': books
      }));

      return this.httpClient.post<IResponse>(environment.url.concat(environment.assignBooks), { params: httpParams });
   }

   /**
    * Function getting the books list are assigned to the student
    * @param studentId 
    */
   getBooksListForStudent(studentId): Observable<any> {
      let httpParams = new HttpParams();
      httpParams = httpParams.append('id', studentId);

      return this.httpClient.get<any>(environment.url.concat(environment.booksList), { params: httpParams });
   }
}
