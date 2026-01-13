import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { UseDocumentTitle } from './components/common/UseDocumentTitle';
import {
    GetAuthorInformation, CreateNewAuthor,
    UpdateExistingAuthor, DeleteExistingAuthor, SearchAuthors
} from './Author';
import {
    GetBookInformation, CreateNewBook,
    UpdateExistingBook, DeleteExistingBook, SearchBooks
} from './Book';
import {
    BorrowAvailableBook, ReturnBorrowedBook,
    GetOverdueBooksInformation, GetUserBorrowedBooks
} from './Borrowing';
import {
    CreateNewCategory, GetExistingCategoryTree, SearchCategories
} from './Category';
import './App.css';
import './index.css'

function About() {
    UseDocumentTitle("About the application")
    return (
        <div>
            <h1 className='App'>About the application</h1>
            <h2>This modern application is designed to help process library-related requests:</h2>
            <ul><li><h3>create, update, and retrieve information about book authors;</h3></li></ul>
            <ul><li><h3>create, update, delete, and retrieve information about existing books;</h3></li></ul>
            <ul><li><h3>manage book-related events, borrow and return books, find overdue books, and calculate fees for them.</h3></li></ul>
        </div>
    );
}
function NotFound() {
    UseDocumentTitle("Not found")
    return <div className='App'>
        <h1>Resource not found</h1>;
    </div>
}

function Main() {
    UseDocumentTitle("Library Management App")
    return (
        <div>
            <h1 className='App'>Welcome to the Library Management Application (2026)</h1>
            <div className='App' >
                <div><h2 className='button-beauty' style={{ fontSize: 25 }}><Link to="/about">About the application</Link></h2></div>
                <div><h2 className='button-beauty' style={{ fontSize: 25 }}><Link to="/authorSection">Go to the Author Section</Link></h2></div>
                <div><h2 className='button-beauty' style={{ fontSize: 25 }}><Link to="/bookSection">Go to the Book Section</Link></h2></div>
                <div><h2 className='button-beauty' style={{ fontSize: 25 }}><Link to="/categorySection">Go to the Category Section</Link></h2></div>
                <div><h2 className='button-beauty' style={{ fontSize: 25 }}><Link to="/borrowingSection">Go to the Borrowing Section</Link></h2></div>
            </div>
        </div>
    );
}

function AuthorSection() {
    UseDocumentTitle("Author Section")
    return (
        <div className='App'>
            <h1>Here you can view information about authors and perform actions related to them.</h1>
            <div><h2 className='button-beauty' style={{ fontSize: 25 }}><Link to="/">Go to the Main Page</Link></h2></div>
            <div><h2 className='button-beauty' style={{ fontSize: 25 }}><Link to="/getAuthor">Get detailed information about the author</Link></h2></div>
            <div><h2 className='button-beauty' style={{ fontSize: 25 }}><Link to="/createAuthor">Create a new author</Link></h2></div>
            <div><h2 className='button-beauty' style={{ fontSize: 25 }}><Link to="/updateAuthor">Update an existing author</Link></h2></div>
            <div><h2 className='button-beauty' style={{ fontSize: 25 }}><Link to="/deleteAuthor">Delete an existing author</Link></h2></div>
            <div><h2 className='button-beauty' style={{ fontSize: 25 }}><Link to="/getAuthors">Search required authors</Link></h2></div>
        </div>
    )
}

function BookSection() {
    UseDocumentTitle("Book Section")
    return (
        <div className='App'>
            <h1>Here you can view information about books and perform actions related to them.</h1>
            <div><h2 className='button-beauty' style={{ fontSize: 25 }}><Link to="/">Go to the Main Page</Link></h2></div>
            <div><h2 className='button-beauty' style={{ fontSize: 25 }}><Link to="/getBook">Get detailed information about the book</Link></h2></div>
            <div><h2 className='button-beauty' style={{ fontSize: 25 }}><Link to="/createBook">Create a new book</Link></h2></div>
            <div><h2 className='button-beauty' style={{ fontSize: 25 }}><Link to="/updateBook">Update an existing book</Link></h2></div>
            <div><h2 className='button-beauty' style={{ fontSize: 25 }}><Link to="/deleteBook">Delete an existing book</Link></h2></div>
            <div><h2 className='button-beauty' style={{ fontSize: 25 }}><Link to="/getBooks">Search required books</Link></h2></div>
        </div>
    )
}

function CategorySection() {
    UseDocumentTitle("Category Section")
    return (
        <div className='App'>
            <h1>Here you can view information about categories and perform actions related to them.</h1>
            <div><h2 className='button-beauty' style={{ fontSize: 25 }}><Link to="/">Go to the Main Page</Link></h2></div>
            <div><h2 className='button-beauty' style={{ fontSize: 25 }}><Link to="/createCategory">Create category</Link></h2></div>
            <div><h2 className='button-beauty' style={{ fontSize: 25 }}><Link to="/getCategories">Get categories</Link></h2></div>
            <div><h2 className='button-beauty' style={{ fontSize: 25 }}><Link to="/getCategoryTree">Get category tree</Link></h2></div>
        </div>
    )
}

function BorrowingSection() {
    UseDocumentTitle("Borrowing Section")
    return (
        <div className='App'>
            <h1>Here you can view information about borrowings and perform actions related to them.</h1>
            <div><h2 className='button-beauty' style={{ fontSize: 25 }}><Link to="/">Go to the Main Page</Link></h2></div>
            <div><h2 className='button-beauty' style={{ fontSize: 25 }}><Link to="/getOverdueBooks">Get detailed information about the overdue books</Link></h2></div>
            <div><h2 className='button-beauty' style={{ fontSize: 25 }}><Link to="/borrowBook">Borrow a book</Link></h2></div>
            <div><h2 className='button-beauty' style={{ fontSize: 25 }}><Link to="/returnBook">Return a book</Link></h2></div>
            <div><h2 className='button-beauty' style={{ fontSize: 25 }}><Link to="/userBorrowings">Get user borrowings</Link></h2></div>
        </div>
    )
}

function Nav() {
    return <nav>
        <Link className='button-beauty' style={{ fontSize: 15 }} to="/">Main Page</Link>
        <Link className='button-beauty' style={{ fontSize: 15 }} to="/authorSection">Author Section</Link>
        <Link className='button-beauty' style={{ fontSize: 15 }} to="/bookSection">Book Section</Link>
        <Link className='button-beauty' style={{ fontSize: 15 }} to="/categorySection">Category Section</Link>
        <Link className='button-beauty' style={{ fontSize: 15 }} to="/borrowingSection">Borrowing Section</Link>
    </nav>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/error" element={<NotFound />} />

                <Route path="/authorSection" element={<AuthorSection />} />
                <Route path="/getAuthor" element={<GetAuthorInformation />} />
                <Route path="/createAuthor" element={<CreateNewAuthor />} />
                <Route path="/updateAuthor" element={<UpdateExistingAuthor />} />
                <Route path="/deleteAuthor" element={<DeleteExistingAuthor />} />
                <Route path="/getAuthors" element={<SearchAuthors />} />

                <Route path="/bookSection" element={<BookSection />} />
                <Route path="/getBook" element={<GetBookInformation />} />
                <Route path="/createBook" element={<CreateNewBook />} />
                <Route path="/updateBook" element={<UpdateExistingBook />} />
                <Route path="/deleteBook" element={<DeleteExistingBook />} />
                <Route path="/getBooks" element={<SearchBooks />} />

                <Route path="/borrowingSection" element={<BorrowingSection />} />
                <Route path="/getOverdueBooks" element={<GetOverdueBooksInformation />} />
                <Route path="/borrowBook" element={<BorrowAvailableBook />} />
                <Route path="/returnBook" element={<ReturnBorrowedBook />} />
                <Route path="/userBorrowings" element={<GetUserBorrowedBooks />} />

                <Route path="/categorySection" element={<CategorySection />} />
                <Route path="/createCategory" element={<CreateNewCategory />} />
                <Route path="/getCategories" element={<SearchCategories />} />
                <Route path="/getCategoryTree" element={<GetExistingCategoryTree />} />
            </Routes>
        </div>
    </BrowserRouter>
);
