import { useState } from 'react';
import { BookGetRequest } from '../../../grpc/book_pb';
import { BookInformation } from './BookInformation';
import { client } from './BookServiceClient.js';

const refreshPage = () => {
    window.location.reload();
};

function GetBook() {
    const [bookId, setBookId] = useState('');
    const [book, setBook] = useState('');
    const [error, setError] = useState(null)

    const sendRequest = () => {
        const request = new BookGetRequest();
        request.setBookId(bookId);
        client.getBook(request, {}, (err, response) => {
            if (err) {
                setError(`Error: ${err.message}`);
                setBook(null)
            } else {
                setBook(response.getBook().toObject());
            }
        });
    };

    return (
        <div className='App'>
            <div><h3><strong>Please, enter the Book ID you want to see:</strong></h3></div>

            <input
                type="text"
                value={bookId}
                required
                onChange={(e) => setBookId(e.target.value)}
                placeholder="Enter the Book ID"
            />
            <button className='button-beauty' onClick={sendRequest}>Get Book info</button>

            <div>
                <button className='button-beauty' onClick={refreshPage}>Refresh Page</button>
            </div>

            <div className='App'>
                {book ? (<div>
                    <h2>Detailed Book Information:</h2>
                    <BookInformation book={book} />
                </div>)
                    : (
                        <div>
                            <h2>{error}</h2>
                        </div>
                    )}
            </div>
        </div>
    );
}

export { GetBook };
