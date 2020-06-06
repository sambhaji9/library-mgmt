// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { BooksListComponent } from 'src/app/books/books-list/books-list.component';

export const environment = {
	production: false,
	url: 'http://127.0.0.1:3000/',
	subjectAreas: 'subjectAreas',
	subject: 'subject',
	newSubjectArea: 'newSubjectArea',
	newBook: 'newBook',
	newStudent: 'newStudent',
	student: 'student-list',
	updateStudent: 'updateStudent',
	deleteStudent: 'deleteStudent'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
