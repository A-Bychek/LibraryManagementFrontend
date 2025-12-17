import { UseDocumentTitle } from './components/common/UseDocumentTitle';
import { GetOverdueBooks } from './components/api/borrowings/GetOverdueBooks';
import { BorrowBook } from './components/api/borrowings/BorrowBook';
import { ReturnBook } from './components/api/borrowings/ReturnBook';
import { GetUserBorrowings } from './components/api/borrowings/GetUserBorrowings';

function GetOverdueBooksInformation() {
    UseDocumentTitle("Get overdue books")
    return <GetOverdueBooks />
}

function BorrowAvailableBook() {
    UseDocumentTitle("Borrow a book")
    return <BorrowBook />
}

function ReturnBorrowedBook() {
    UseDocumentTitle("Return a book")
    return <ReturnBook />
}

function GetUserBorrowedBooks() {
    UseDocumentTitle("Get user borrowings")
    return <GetUserBorrowings />
}

export {
    BorrowAvailableBook, ReturnBorrowedBook,
    GetOverdueBooksInformation, GetUserBorrowedBooks
}
