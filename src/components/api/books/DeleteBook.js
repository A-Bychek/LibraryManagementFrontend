import { useState } from 'react';
import { BookDeleteRequest } from '../../../grpc/book_pb';
import { client } from './BookServiceClient';

const refreshPage = () => {
    window.location.reload();
};

function DeleteBook() {
    const [bookId, setBookId] = useState('');
    const [book, setBook] = useState('');

    const sendRequest = () => {
        const request = new BookDeleteRequest();
        request.setBookId(bookId);
        client.deleteBook(request, {}, (err, response) => {
            if (err) {
                setBook(`Error: ${err.message}`);
            } else {
                setBook(response.getMessage());
            }
        });
    };

    return (
        <div className='App'>
            <div><strong>Please, enter the Book ID you want to delete:</strong></div>

            <input
                type="text"
                value={bookId}
                required
                onChange={(e) => setBookId(e.target.value)}
                placeholder="Enter the Book ID"
            />
            <button className='button-beauty' onClick={sendRequest}>Delete book</button>

            <div>
                <button className='button-beauty' onClick={refreshPage}>Refresh Page</button>
            </div>

            <div className='App'>
                {book ? (
                    <div>
                        <h2>{book}</h2>
                    </div>
                )
                    : (<h3></h3>)}
            </div>
        </div>
    );
}

export { DeleteBook };
