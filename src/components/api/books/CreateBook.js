import { useState } from 'react';
import { client } from './BookServiceClient';
import { CreateBookRequest } from '../../../grpc/book_pb';
import { BookInformation } from './BookInformation'

function CreateBook() {
    const [book, setBook] = useState(null);
    const [title, setTitle] = useState('');
    const [isbn, setIsbn] = useState('');
    const [description, setDescription] = useState('');
    const [authorId, setAuthorId] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [pageCount, setPageCount] = useState('');

    const sendRequest = () => {
        const request = new CreateBookRequest();

        request.setTitle(title);
        request.setIsbn(isbn);
        request.setDescription(description);
        request.setAuthorId(authorId);
        request.setCategoryId(categoryId);
        request.setPublishedDate(publishedDate);
        request.setPageCount(Number(pageCount));

        client.createBook(request, {}, (err, response) => {
            if (err) {
                throw new ReferenceError(`Can't create a book:\n${err.message}`)
            } else {
                setBook(response.toObject());
            }
        });
    };

    return (
        <div className='App'>
            <div>
                <h3>Let's create a new book entity. Please fill in the following fields:</h3>
            </div>

            <div>Title:
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Place title here"
                />
            </div>

            <div>ISBN:
                <input
                    type="text"
                    value={isbn}
                    onChange={(e) => setIsbn(e.target.value)}
                    placeholder="Place ISBN here"
                />
            </div>

            <div>Description:
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Place book description here"
                />
            </div>

            <div>Author ID:
                <input
                    type="int64"
                    value={authorId}
                    onChange={(e) => setAuthorId(e.target.value)}
                    placeholder="Place author ID here"
                />

            </div>

            <div>Category ID:
                <input
                    type="int64"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    placeholder="Place category ID here"
                />

            </div>

            <div>Published date:
                <input
                    type="text"
                    value={publishedDate}
                    onChange={(e) => setPublishedDate(e.target.value)}
                    placeholder="Place published date here"
                />

            </div>

            <div>Page count:
                <input
                    type="int32"
                    value={pageCount}
                    onChange={(e) => setPageCount(e.target.value)}
                    placeholder="Place page count here"
                />

            </div>

            <button className='button-beauty' onClick={sendRequest}>Create</button>
            {book ? (
                <div className='App'>
                    <div><h2>Book has been created:</h2></div>
                    <div><BookInformation book={book} /></div>
                </div>
            ) : (
                <h3></h3>
            )}
        </div>
    );
}

export { CreateBook };
