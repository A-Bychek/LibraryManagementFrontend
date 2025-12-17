import { UseDocumentTitle } from './components/common/UseDocumentTitle';
import { GetBook } from './components/api/books/GetBook';
import { CreateBook } from './components/api/books/CreateBook';
import { UpdateBook } from './components/api/books/UpdateBook';
import { DeleteBook } from './components/api/books/DeleteBook';
import { GetBooks } from './components/api/books/GetBooks';

function GetBookInformation() {
    UseDocumentTitle("Book information")
    return <GetBook />
}

function CreateNewBook() {
    UseDocumentTitle("Create book")
    return <CreateBook />
}

function UpdateExistingBook() {
    UseDocumentTitle("Update book")
    return <UpdateBook />
}

function DeleteExistingBook() {
    UseDocumentTitle("Delete book")
    return <DeleteBook />
}

function SearchBooks() {
    UseDocumentTitle("Search books")
    return <GetBooks />
}

export {
    GetBookInformation, CreateNewBook, UpdateExistingBook,
    DeleteExistingBook, SearchBooks
}
