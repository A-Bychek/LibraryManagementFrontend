import { useState } from 'react';
import { client } from './BorrowingServiceClient';
import { ReturnBookRequest } from '../../../grpc/borrowing_pb';
import { BorrowingInformation } from './BorrowingInformation'

function ReturnBook() {
    const [borrowing, setBorrowing] = useState(null);
    const [borrowingId, setBorrowingId] = useState('');

    const sendRequest = () => {
        const request = new ReturnBookRequest();

        request.setBorrowingId(borrowingId);

        client.returnBook(request, {}, (err, response) => {
            if (err) {
                throw new ReferenceError(`Can't return a book:\n${err.message}`)
            } else {
                setBorrowing(response.toObject());
            }
        });
    };

    return (
        <div className='App'>
            <div>
                <h3>Do you want to return a book? Please fill in the following fields:</h3>
            </div>

            <div>Borrowing ID:
                <input
                    type="int64"
                    value={borrowingId}
                    onChange={(e) => setBorrowingId(e.target.value)}
                    placeholder="Place borrowing ID here"
                />
            </div>

            <button className='button-beauty' onClick={sendRequest}>Return</button>
            {borrowing ? (
                <div className='App'>
                    <div><h2>Book has been returned:</h2></div>
                    <div><BorrowingInformation borrowing={borrowing} /></div>
                </div>
            ) : (
                <h3></h3>
            )}
        </div>
    );
}

export { ReturnBook };
