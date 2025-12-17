import { useState } from "react";
import { BookSearchRequest } from '../../../grpc/book_pb';
import { client } from './BookServiceClient';
import { BookInformation } from './BookInformation';

function GetBooks() {
    const [books, setBooks] = useState('')
    const [searchTerm, setSearchTerm] = useState('');
    const [authorId, setAuthorId] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [isAvailable, setIsAvailable] = useState(true);
    const [pageNumber, setPageNumber] = useState('');
    const [pageSize, setPageSize] = useState('');

    const onChange = (event) => {
        setIsAvailable(event.target.value);
    };

    const sendRequest = () => {
        const request = new BookSearchRequest();
        if (searchTerm) request.setSearchTerm(searchTerm);
        request.setIsAvailable(isAvailable == "false" ? false : true);
        if (authorId) request.setAuthorId(authorId);
        if (categoryId) request.setCategoryId(categoryId);
        if (pageNumber) request.setPageNumber(Number(pageNumber));
        if (pageSize) request.setPageSize(Number(pageSize));
        client.getBooks(request, {}, (err, response) => {
            if (err) {
                throw new ReferenceError(`Can't get books:\n${err.message}`)
            } else {
                setBooks(response.getBooksList().map(book => book.toObject()));
            }
        });
    };

    return (
        <div className='App'>
            <div>
                <h3>Please, fill in the following search parameters:</h3>
            </div>

            <div><b>Search Term (optional):</b>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Place search term here"
                />
            </div>

            <div><b>Author ID (optional):</b>
                <input
                    type="text"
                    value={authorId}
                    onChange={(e) => setAuthorId(e.target.value)}
                    placeholder="Place author ID here"
                />
            </div>

            <div><b>Category ID (optional):</b>
                <input
                    type="text"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    placeholder="Place category ID here"
                />
            </div>

            <div><b>Is the book available or not?</b>
                <select value={isAvailable} onChange={onChange}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>

            <div><b>Page number (optional):</b>
                <input
                    type="int32"
                    value={pageNumber}
                    onChange={(e) => setPageNumber(e.target.value)}
                    placeholder="Place page number here"
                />
            </div>

            <div><b>Page size (optional):</b>
                <input
                    type="int32"
                    value={pageSize}
                    onChange={(e) => setPageSize(e.target.value)}
                    placeholder="Place page size here"
                />
            </div>

            <button className='button-beauty' onClick={sendRequest}>Search</button>
            {books ? (
                <div className='App'>
                    <h2>Books:</h2>
                    <ul>
                        {books.map((book, index) => (
                            <li className='flex-container' key={index}>{<BookInformation book={book} />}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <h3></h3>
            )
            }
        </div>
    )
}

export { GetBooks };
