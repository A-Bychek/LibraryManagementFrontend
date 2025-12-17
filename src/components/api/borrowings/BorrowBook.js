import { useState } from 'react';
import { client } from './BorrowingServiceClient';
import { BorrowBookRequest } from '../../../grpc/borrowing_pb';
import { BorrowingInformation } from './BorrowingInformation'

function BorrowBook() {
    const [borrowing, setBorrowing] = useState(null);
    const [bookId, setBookId] = useState('');
    const [userId, setUserId] = useState('');
    const [daysToReturn, setDaysToReturn] = useState('');

    const sendRequest = () => {
        const request = new BorrowBookRequest();

        request.setBookId(bookId);
        request.setUserId(userId);
        request.setDaysToReturn(Number(daysToReturn));

        client.borrowBook(request, {}, (err, response) => {
            if (err) {
                throw new ReferenceError(`Can't borrow a book:\n${err.message}`)
            } else {
                setBorrowing(response.toObject());
            }
        });
    };

    return (
        <div className='App'>
            <div>
                <h3>Do you want to borrow a book? Please fill in the following fields:</h3>
            </div>

            <div>Book ID:
                <input
                    type="int64"
                    value={bookId}
                    onChange={(e) => setBookId(e.target.value)}
                    placeholder="Place book ID here"
                />
            </div>

            <div>User ID:
                <input
                    type="int64"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Place user ID here"
                />
            </div>

            <div>Days to return:
                <input
                    type="int64"
                    value={daysToReturn}
                    onChange={(e) => setDaysToReturn(e.target.value)}
                    placeholder="Place the desired number of days before return."
                />
            </div>

            <button className='button-beauty' onClick={sendRequest}>Borrow</button>
            {borrowing ? (
                <div className='App'>
                    <div><h2>Book has been borrowed:</h2></div>
                    <div><BorrowingInformation borrowing={borrowing} /></div>
                </div>
            ) : (
                <h3></h3>
            )}
        </div>
    );
}

export { BorrowBook };
