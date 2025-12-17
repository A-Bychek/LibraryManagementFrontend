function BorrowingInformation({ borrowing }) {
    return (
        <div className='button-beauty'>
            <h2>{borrowing.bookTitle}</h2>
            <h2>Book ID: {borrowing.bookId}</h2>
            <h2>Borrowing user ID: {borrowing.userId}</h2>
            <h3><p><strong>Borrow date:</strong> {new Date(Date.parse(borrowing.borrowDate)).toLocaleDateString()}</p></h3>
            <h3><p><strong>Due date:</strong> {new Date(Date.parse(borrowing.dueDate)).toLocaleDateString()}</p></h3>
            <h3><p><strong>Return date:</strong> {borrowing.returnDate ? new Date(Date.parse(borrowing.returnDate)).toLocaleDateString() : "Not returned"}</p></h3>
            <h3><p><strong>Fine amount:</strong> {borrowing.fineAmount}</p></h3>
            <h3><p><strong>Status:</strong> {borrowing.status}</p></h3>
        </div>
    );
}

export { BorrowingInformation };
