import { useState } from "react";
import { OverdueBooksRequest } from '../../../grpc/borrowing_pb';
import { client } from './BorrowingServiceClient';
import { BorrowingInformation } from './BorrowingInformation';

function GetOverdueBooks() {
    const [borrowings, setBorrowings] = useState('');
    const [pageNumber, setPageNumber] = useState('');
    const [pageSize, setPageSize] = useState('');

    const sendRequest = () => {
        const request = new OverdueBooksRequest();
        if (pageNumber) request.setPageNumber(Number(pageNumber));
        if (pageSize) request.setPageSize(Number(pageSize));
        client.getOverdueBooks(request, {}, (err, response) => {
            if (err) {
                throw new ReferenceError(`Can't get overdue books:\n${err.message}`)
            } else {
                setBorrowings(response.getBorrowingsList().map(borrowing => borrowing.toObject()));
            }
        });
    };

    return (
        <div className='App'>
            <div>
                <h3>Please, fill in the following search parameters:</h3>
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
            {borrowings ? (
                <div className='App'>
                    <h2>Books:</h2>
                    <ul>
                        {borrowings.map((borrowing, index) => (
                            <li className='flex-container' key={index}>{<BorrowingInformation borrowing={borrowing} />}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <h3></h3>
            )}
        </div>
    )
}

export { GetOverdueBooks };
