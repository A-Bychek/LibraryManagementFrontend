function BookInformation({ book }) {
    return (
        <div className='button-beauty' >
            <h2>{book.title}</h2>
            <h2>ISBN: {book.isbn}</h2>
            <h3><p><strong>Description:</strong> {book.description}</p></h3>
            <h3><p><strong>Author:</strong> {book.authorName}</p></h3>
            <h3><p><strong>Category:</strong> {book.categoryName}</p></h3>
            <h3><p><strong>Published:</strong> {new Date(Date.parse(book.publishedDate)).toLocaleDateString()}</p></h3>
            <h3><p><strong>Pages:</strong> {book.pageCount}</p></h3>
            <h3><p><strong>Availability:</strong> {book.isAvailable ? 'Available' : 'Borrowed'}</p></h3>
        </div>
    );
}

export { BookInformation };
