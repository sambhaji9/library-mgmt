import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from 'src/app/books/books-list/books-list.model';
import { IStudentForm } from '../student-form/student-form.model';
import { StudentListService } from '../student-list/student-list.service';

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

   constructor(private activatedRoute: ActivatedRoute, private studentListService: StudentListService) { }

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

      } else {
         this.studentDetails = JSON.parse(this.activatedRoute.snapshot.params['studentDetails']);
         this.showStudentListSelect = false;
      }
   }

   /**
    * Function setting the studentDetails, after studentName value changes in dropdown
    */
   selectedStudentChange() {
      this.studentDetails.rollNo = this.student.rollNo;
      this.studentDetails.class = this.student.class;
   }

   /**
    * Function assigning the books the student
    */
   assignBooks() {
      console.log(this.student);
      console.log(this.books);
   }
}
