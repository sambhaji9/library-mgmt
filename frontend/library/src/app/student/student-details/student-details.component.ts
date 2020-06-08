import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from 'src/app/books/books-list/books-list.model';
import { IStudentForm } from '../student-form/student-form.model';
import { StudentListService } from '../student-list/student-list.service';
import { StudentDetailsService } from './student-details.service';

@Component({
   selector: 'app-student-details',
   templateUrl: './student-details.component.html',
   styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
   books: IBook[] = [];
   studentDetails: IStudentForm;
   showStudentListSelect = false;
   studentList: IStudentForm[];
   student: IStudentForm;
   showAssignBooksSection = false;
   studentBooks = [];

   constructor(private activatedRoute: ActivatedRoute, private studentListService: StudentListService, private studentDetailsService: StudentDetailsService) { }

   ngOnInit() {
      let paramKeys = Object.keys(this.activatedRoute.snapshot.params);
      if (paramKeys.indexOf('url') === -1) {
         paramKeys.forEach(element => {
            this.books.push(JSON.parse(this.activatedRoute.snapshot.params[element]));
         });
         // show the student list
         this.showStudentListSelect = true;
         // get the studentList
         this.studentListService.getStudentList().subscribe(response => {
            this.studentList = response;
         });

         // set the empty values for studentDetails
         this.studentDetails = {
            name: '',
            rollNo: '',
            class: ''
         };
         this.showAssignBooksSection = true;
      } else {
         this.studentDetails = JSON.parse(this.activatedRoute.snapshot.params['studentDetails']);
         this.showStudentListSelect = false;
         this.getBooksForStudent(this.studentDetails._id);
      }
   }

   /**
    * Function setting the studentDetails, after studentName value changes in dropdown
    */
   selectedStudentChange() {
      this.studentDetails._id = this.student._id;
      this.studentDetails.rollNo = this.student.rollNo;
      this.studentDetails.class = this.student.class;
      if (!this.showAssignBooksSection) {
         this.getBooksForStudent(this.studentDetails._id);
      }
   }

   /**
    * Function assigning the books the student
    */
   assignBooks() {
      if (typeof this.student !== 'undefined' && typeof this.books !== 'undefined') {
         this.studentDetailsService.assignBooks(this.student, this.books).subscribe(response => {
            if (response.code === 'R00') {
               this.showAssignBooksSection = false;
               this.getBooksForStudent(this.student._id);
            }
         });
      }
   }

   /**
    * Function fetching the complete list of books for the student
    */
   getBooksForStudent(id: string) {
      this.studentDetailsService.getBooksListForStudent(id).subscribe(response => {
         this.studentBooks = response.books;
      });
   }

   /**
    * Function returning the books assigned to the student
    * @param book
    */
   submitBooks(book) {
      this.studentDetailsService.returnStudentBooks(this.studentDetails._id, book).subscribe(response => {
         if (response.code === 'R00') {
            this.getBooksForStudent(this.studentDetails._id);
         }
      });
   }
}
