import { useState } from "react";
import { UserBorrowingsRequest } from '../../../grpc/borrowing_pb';
import { client } from './BorrowingServiceClient';
import { BorrowingInformation } from './BorrowingInformation';

function GetUserBorrowings() {
    const [borrowings, setBorrowings] = useState('');
    const [userId, setUserId] = useState('');
    const [status, setStatus] = useState('');
    const [error, setError] = useState(null);

    const sendRequest = () => {
        const request = new UserBorrowingsRequest();
        request.setUserId(userId);
        request.setStatus(status);
        client.getUserBorrowings(request, {}, (err, response) => {
            if (err) {
                setError(`Error: ${err.message}`);
                setBorrowings(null);
            } else {
                setBorrowings(response.getBorrowingsList().map(borrowing => borrowing.toObject()));
            }
        });
    };

    return (
        <div className='App'>
            <div>
                <h3>Please, fill in the following parameters:</h3>
            </div>

            <div><b>User ID:</b>
                <input
                    type="int64"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Place user ID here"
                />
            </div>

            <div><b>Status:</b>
                <input
                    type="text"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    placeholder="Place status here"
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
                <div>
                    <h2>{error}</h2>
                </div>
            )}
        </div>
    )
}

export { GetUserBorrowings };
