import { useState } from 'react';
import { AuthorGetRequest } from '../../../grpc/author_pb';
import { AuthorInformation } from './AuthorInformation';
import { client } from './AuthorServiceClient';

const refreshPage = () => {
    window.location.reload();
};

function GetAuthor() {
    const [authorId, setAuthorId] = useState('');
    const [author, setAuthor] = useState('');
    const [error, setError] = useState(null)

    const sendRequest = () => {
        const request = new AuthorGetRequest();
        request.setAuthorId(authorId);
        client.getAuthor(request, {}, (err, response) => {
            if (err) {
                setError(`Error: ${err.message}`);
                setAuthor(null)
            } else {
                setAuthor(response.getAuthor().toObject());
            }
        });
    };

    return (
        <div className='App'>
            <div><h3><strong>Please, enter the Author ID you want to see:</strong></h3></div>

            <input style={{ marginRight: 15, textAlign: 'center' }}
                type="text"
                value={authorId}
                required
                onChange={(e) => setAuthorId(e.target.value)}
                placeholder="Enter the Author ID"
            />
            <button className='button-beauty' onClick={sendRequest}>Get Author info</button>

            <div>
                <button className='button-beauty' onClick={refreshPage}>Refresh Page</button>
            </div>

            <div className='App'>
                {author ? (<div>
                    <h2>Detailed Author Information:</h2>
                    < AuthorInformation author={author} />
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

export { GetAuthor };
