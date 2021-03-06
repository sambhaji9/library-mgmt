/**
 * Interface model for student details
 */
export interface IStudentForm {
    name: string;
    rollNo: string;
    class: string;
    _id?: string;
    bookDetails?: IBookDetails;
}

export interface IBookDetails {
    bookId: string;
    bookName: string;
    bookDatabase: string;
}
