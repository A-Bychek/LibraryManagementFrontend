import { useState } from 'react';
import { client } from './BookServiceClient';
import { UpdateBookRequest } from '../../../grpc/book_pb';
import { BookInformation } from './BookInformation'

function UpdateBook() {
    const [book, setBook] = useState(null);
    const [bookId, setBookId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [pageCount, setPageCount] = useState('');
    const [error, setError] = useState();

    const sendRequest = () => {
        const request = new UpdateBookRequest();

        request.setBookId(bookId);
        if (title) request.setTitle(title);
        if (description) request.setDescription(description);
        if (categoryId) request.setCategoryId(categoryId);
        if (publishedDate) request.setPublishedDate(publishedDate);
        if (pageCount) request.setPageCount(Number(pageCount));

        client.updateBook(request, {}, (err, response) => {
            if (err) {
                setError(err.message);
                setBook(null)
            } else {
                setBook(response.toObject());
            }
        });
    };

    return (
        <div className='App'>
            <div>
                <h3>Want to update an existing book entity? Please fill in the following fields:</h3>
            </div>

            <div><b>Book ID (required):</b>
                <input
                    type="text"
                    value={bookId}
                    onChange={(e) => setBookId(e.target.value)}
                    placeholder="Place book ID here"
                />
            </div>

            <div><b>Title (optional):</b>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Place title here"
                />
            </div>

            <div><b>Description (optional):</b>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Place description here"
                />
            </div>

            <div><b>Category ID (optional):</b>
                <input
                    type="int64"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    placeholder="Place category ID here"
                />
            </div>

            <div><b>Published date (optional):</b>
                <input
                    type="text"
                    value={publishedDate}
                    onChange={(e) => setPublishedDate(e.target.value)}
                    placeholder="Place published date here"
                />

            </div>

            <div><b>Page count (optional):</b>
                <input
                    type="int32"
                    value={pageCount}
                    onChange={(e) => setPageCount(e.target.value)}
                    placeholder="Place page count here"
                />

            </div>

            <button className='button-beauty' onClick={sendRequest}>Update</button>
            {book ? (
                <div className='App'>
                    <h2>Book has been updated:</h2>
                    <BookInformation book={book} />
                </div>
            ) : (
                <div>
                    <h2>{error}</h2>
                </div>
            )}
        </div>
    );
}

export { UpdateBook };
