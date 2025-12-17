function AuthorInformation({ author }) {
    return (
        <div className="button-beauty">
            <h2>{author.firstName} {author.lastName}</h2>
            <h3><p><strong>Author ID:</strong> {author.authorId}</p></h3>
            <h3><p><strong>Biography:</strong> {author.biography}</p></h3>
            <h3><p><strong>Date of Birth:</strong> {new Date(Date.parse(author.dateOfBirth)).toLocaleDateString()}</p></h3>
            <h3><p><strong>Status:</strong> {author.isActive ? 'Active' : 'Inactive'}</p></h3>
            <h3><p><strong>Books:</strong> {author.bookCount}</p></h3>
        </div>
    );
}

export { AuthorInformation };
