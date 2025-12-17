import { useState } from 'react';
import { AuthorDeleteRequest } from '../../../grpc/author_pb';
import { client } from './AuthorServiceClient';

const refreshPage = () => {
    window.location.reload();
};

function DeleteAuthor() {
    const [authorId, setAuthorId] = useState('');
    const [author, setAuthor] = useState('');

    const sendRequest = () => {
        const request = new AuthorDeleteRequest();
        request.setAuthorId(authorId);
        client.deleteAuthor(request, {}, (err, response) => {
            if (err) {
                setAuthor(`Error: ${err.message}`);
            } else {
                setAuthor(response.getMessage());
            }
        });
    };

    return (
        <div className='App'>
            <div><strong>Please, enter the Author ID you want to delete:</strong></div>

            <input
                type="text"
                value={authorId}
                required
                onChange={(e) => setAuthorId(e.target.value)}
                placeholder="Enter the Author ID"
            />
            <button className='button-beauty' onClick={sendRequest}>Delete author</button>

            <div>
                <button className='button-beauty' onClick={refreshPage}>Refresh Page</button>
            </div>

            <div className='App'>
                {author ? (
                    <div>
                        <h2>{author}</h2>
                    </div>
                )
                    : (<h3></h3>)}
            </div>
        </div>

    );
}

export { DeleteAuthor };
